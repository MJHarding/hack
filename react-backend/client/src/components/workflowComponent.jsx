import React, { Component } from "react";
import "../App.css";
import Col from "react-bootstrap/lib/Col";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";


class WorkflowComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={6} mdPush={6}>
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </Col>
          <Col md={6} mdPull={6}>
            <code>&lt;{"Col md={6} mdPull={6}"} /&gt;</code>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default WorkflowComponent;
