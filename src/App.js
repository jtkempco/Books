import React, { Component } from "react";
//import axios from "axios";
import { Container } from "reactstrap";
import Search from "./components/Search";
import Book from "./components/Book";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    query: "",
    items: []
  };

  getBooks = () => {
    const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${API_URL}${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        //console.log(JSON.stringify(items));
        this.setState({ items });
      }); // TODO: Add a catch method here in case the API call fails
  };

  handleReset = e => {
    this.setState({ query: "" });
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState({ query });
  };

  handleSubmit = e => {
    console.log("query: " + this.state.query);
    this.getBooks();
  };

  render() {
    return (
      <div className="App">
        <Container>
          <header>
            <h1>Book Finder</h1>
          </header>

          <Search
            resetHandler={this.handleReset}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            query={this.state.query}
          />

          <div className="books">
            {this.state.items.map(item => (
              <Book key={item.id} {...item} />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
