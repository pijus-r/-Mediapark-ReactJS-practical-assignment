import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";

export default class ImageForm extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              className="shadow-lg border-0"
              type="search"
              onChange={this.onSearchChange}
              ref={input => (this.query = input)}
              name="search"
              placeholder="Search"
            />
            <InputGroup.Append>
              <Button type="submit" id="submit" variant="light">
                <i className="fa fa-search"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Container>
    );
  }
}
