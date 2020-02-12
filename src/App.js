import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import "./App.css";
import ImageList from "./Components/ImageList";
import ImageForm from "./Components/ImageForm";
import { urlid } from "./cred.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loadingState: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "star trek") => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${urlid}`
      )
      .then(data => {
        this.setState({ imgs: data.data.results, loadingState: false });
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <ImageForm onSearch={this.performSearch} />
          </div>
        </div>

        <div className="main-content">
          {this.state.loadingState ? (
            <Alert variant="light">
              <Alert.Heading>Loading</Alert.Heading>
              <hr />
            </Alert>
          ) : (
            <ImageList data={this.state.imgs} />
          )}
        </div>
      </div>
    );
  }
}
