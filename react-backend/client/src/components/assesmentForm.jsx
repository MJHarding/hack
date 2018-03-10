import React, { Component } from "react";
import Form from "react-bootstrap/lib/Form";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import Button from "react-bootstrap/lib/Button";
import HelpBlock from "react-bootstrap/lib/HelpBlock";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import InputGroup from "react-bootstrap/lib/InputGroup";
import Checkbox from "react-bootstrap/lib/Checkbox";
import Radio from "react-bootstrap/lib/Radio";
import "../App.css";

class AssesmentForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

  render() {
    return (
      <Form horizontal>
        <div class="container">
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Module Title
            </Col>
            <Col md={10}>
              <FormControl
                type="text"
                placeholder="Module Title e.d Introduction to Java"
              />
            </Col>
            <col />
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Examiner
            </Col>
            <Col md={10}>
              <FormControl type="text" placeholder="Examiner" />
            </Col>
            <col />
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Module Code
            </Col>
            <Col md={10}>
              <FormControl
                type="text"
                placeholder="Module Code - E.G COMP101"
              />
            </Col>
            <col />
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Lecturer Name
            </Col>
            <Col md={10}>
              <FormControl
                type="text"
                placeholder="Lecturer Name - E.G Ullrich Hustadt"
              />
            </Col>
            <col />
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Internal Checker
            </Col>
            <Col md={10}>
              <FormControl type="text" placeholder="Internal Checker" />
            </Col>
            <col />
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Year
            </Col>
            <Col md={10}>
              <FormControl type="text" placeholder="Year - E.G 2018" />
            </Col>
            <col />
          </FormGroup>

          <h1>Module Assesment Type</h1>
          <FormGroup>
            <Radio name="radioGroup" inline>
              Quizzes
            </Radio>{" "}
            <Radio name="radioGroup" inline>
              Coursework
            </Radio>{" "}
            <Radio name="radioGroup" inline>
              Midterm Exam
            </Radio>
            <Radio name="radioGroup" inline>
              Final Exam
            </Radio>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Number
            </Col>
            <Col md={10}>
              <FormControl type="text" placeholder="Learning Outcome Number" />
            </Col>
            <col />
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Learning Outcome
            </Col>
            <Col md={10}>
              <FormControl type="text" placeholder="Learning Outcome " />
            </Col>
            <col />
          </FormGroup>

          <FormGroup>
            <Col mdOffset={2} sm={10}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>

          <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" onChange={this.onChange} />
            <button type="submit">Upload</button>
          </form>

          {/* <Row className="show-grid">
            <Col md={6} mdPush={6}>
              Internal Checker
            </Col>
            <Col md={6} mdPull={6}>
              Banter checker
            </Col>
          </Row> */}
        </div>
      </Form>
    );
  }
}

export default AssesmentForm;
