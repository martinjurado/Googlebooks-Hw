import React, { Component } from "react";
import { Container, Row } from "../components/Containers";
import Jumbotron from "../components/Jumbotron";
import { InputDiv, Input, FormBtn } from "../components/Form";

class Search extends Component {
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
                            <Input />

                        </form>
                        <FormBtn>Search</FormBtn>
                    </InputDiv>
                </Row>
            </Container>
        )
    }
}

export default Search;