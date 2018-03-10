import React, { Component } from "react";
import "../App.css";
import Tabs from "react-bootstrap/lib/Tabs";
import Tab from "react-bootstrap/lib/Tab";
import currentRegisteredUsers from "./CurrentRegisteredUsers.jsx";

class submittedDocumentTabs extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col" />
          <div class="col-6">
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Assessment Details">
                Assessment Details
              </Tab>
              <Tab eventKey={2} title="Module Assessment Types">
                <h1> Module Assessment Type </h1>
                <div>
                  {this.state.users.map(user => (
                    <div key={user.id}>{user.username}</div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey={3} title="Uploaded Files">
                Uploaded Files{" "}
              </Tab>
            </Tabs>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default submittedDocumentTabs;
