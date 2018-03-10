import React, { Component } from "react";
import NavBar from "./components/navbar.js";
import HelpJumbotron from "./components/helpJumbotron.jsx";
import LoginForm from "./components/form.js";
import AssesmentForm from "./components/assesmentForm.jsx";
import documentViewerTable from "./components/tableTemplate.js";
import submittedDocumentTabs from "./components/submittedDocumentTabs.jsx";

import { Link, Route } from 'react-router-dom'
import "./App.css";

class App extends Component {
  state = { modules: [] };

  componentDidMount() {
    fetch("/modules")
      .then(res => res.json())
      .then(modules => this.setState({ modules }));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={LoginForm}/>
        <Route path="/workflow" component={AssesmentForm}/>
        <Route path="/help" component={HelpJumbotron}/>
        <Route path="/documentViewer" component={documentViewerTable}/>
        <Route path="/submittedWorkflow" component={submittedDocumentTabs}/>



        {/* <LoginForm />
        <Jumbotron />
        <AssesmentForm />
        <tableTemplate />
        <Alert />
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
              This Worksssss
            </Col>
          </Row>
        </Grid> */}
      </div>
    );
  }
}

export default App;
