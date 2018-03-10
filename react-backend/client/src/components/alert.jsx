import React, { Component } from "react";
import Alert from "react-bootstrap/lib/Alert";


class startAlert extends Component {
  render() {
    return (
        <Alert bsStyle="warning">
        <strong>Oh NO!</strong> Best check yo self, you're not looking too
        good.
      </Alert>
    );
  }
}

export default startAlert;
