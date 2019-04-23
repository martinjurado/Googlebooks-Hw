import React, { Component } from "react";
import { Container, Row } from "../components/Containers";
import { InputDiv, Input, FormBtn } from "../components/Form";
import BookItems from "../components/BookDetails/";
import Header from "../components/Header";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchBook = () => {
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook();
  };

  saveBooks = id => {
    const book = this.state.books.find(book => book.id === id);
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    console.log(this.state);
    return (
      <Container fluid>
        <Row>
          <Header />
          <InputDiv>
            <form>
              <Input
                name="bookSearch"
                value={this.state.bookSearch}
                onChange={this.handleInputChange}
              />
            </form>
            <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
          </InputDiv>
        </Row>

        {this.state.books.map(book => {
          return (
            <BookItems
              key={book.id}
              title={book.volumeInfo.title}
              image={book.volumeInfo.imageLinks.thumbnail}
              description={book.volumeInfo.description}
              authors={book.volumeInfo.authors.join(", ")}
              link={book.volumeInfo.infoLink}
              Button={() => (
                <button
                  onClick={() => this.saveBooks(book.id)}
                  className="btn btn-primary ml-2"
                >
                  Save
                </button>
              )}
            />
          );
        })}
      </Container>
    );
  }
}

export default Search;
