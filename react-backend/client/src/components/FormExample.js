import React, { Component } from 'react';
import '../App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';


class FormExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  constructor(props){
    super(props);
    this.state={
    username:'sgsdalze',
    password:'password'
    }
   }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>

      <div class="container">
        <Tabs>
          <Tab>
            <Grid>
              <Row>
                <Col md={12}>
                  <Panel>
                    Hi
                  </Panel>
                </Col>
             </Row>
          </Grid>
        </Tab>
      </Tabs>
    </div>           








        {/* <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Please Login using your credentials below with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Username"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <FormControl
            type="password"
            value={this.state.value}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>For login issues, Please visit the help page.</HelpBlock>
        </FormGroup>
        // <ButtonToolbar>
            <Button>Submit</Button>
        // </ButtonToolbar>; */}
      </form>
    );
  }
}

export default FormExample;
