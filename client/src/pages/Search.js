import React, { Component } from "react";
import { Container, Row } from "../components/Containers";
import Jumbotron from "../components/Jumbotron";
import { InputDiv, Input, FormBtn } from "../components/Form";
import BookItems from "../components/BookDetails/";
import API from "../utils/API";

class Search extends Component {

    state = {
        books: [],
        bookSearch: ""
    };

    // componentDidMount() {
    //     this.searchBook()
    // }

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchBook = query => {
        API.getBooks(query)
        .then(res => this.setState({books:res.data.items}))
        .catch(err => console.log(err))
    };

    handleFormSubmit = event => {
        event.preventDefault()
        this.searchBook(this.state.bookSearch)
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Jumbotron>
                        <img alt="logo" id="logo" src="https://vignette.wikia.nocookie.net/logopedia/images/4/47/Google_Book_Search_Beta_logo.png/revision/latest?cb=20110819081231"></img>
                        <h3>Search for and Save Books of Interest</h3>
                    </Jumbotron>
                    <InputDiv>
                        <form>
                            <Input
                                name="bookSearch"
                                value={this.state.bookSearch}
                                onChange={this.handleInputChange}
                            />

                        </form>
                        <FormBtn
                            onClick={this.handleFormSubmit}
                        >
                            Search
                        </FormBtn>
                        
                        </InputDiv>
                        
                        </Row>
                        
                        
                        <ul>
                            <BookItems
                              title = {this.state.books.title}  
                            />
                            
                        {this.state.books.map(book => {
                            return(
                                <BookItems
                                key={book.id}
                                title = {book.volumeInfo.title}
                                thumbnail = {book.volumeInfo.imageLinks.smallThumbnail}
                                description = {book.volumeInfo.description}
                                authors = {book.volumeInfo.authors}
                                href = {book.volumeInfo.infoLink}
                               />
                            );
                        })}
                        
                        </ul>    
                
            </Container>
        )
    }
}

export default Search;