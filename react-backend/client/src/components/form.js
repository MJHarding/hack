import React, { Component } from "react";
import "../App.css";
import Form from "react-bootstrap/lib/Form";
import Col from "react-bootstrap/lib/Col";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import Checkbox from "react-bootstrap/lib/Checkbox";
import Button from "react-bootstrap/lib/Button";

class LoginForm extends Component {
  render() {
    return (
      <Form horizontal>
        <div class="container">
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col md={10}>
            <FormControl type="text" placeholder="Username" />
          </Col>
          <col />
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col md={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
          <col />
        </FormGroup>

        <FormGroup>
          <Col mdOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col mdOffset={2} sm={10}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
