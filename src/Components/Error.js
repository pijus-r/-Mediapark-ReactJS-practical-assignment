import React from "react";
import Alert from "react-bootstrap/Alert";

const Error = props => (
  <Alert variant="light">
    <Alert.Heading>No Images match your search.</Alert.Heading>
    <hr />
    <p className="mb-0">Better luck next time, huh.</p>
  </Alert>
);

export default Error;
