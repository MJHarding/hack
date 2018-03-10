import React, { Component } from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import MenuItem from "react-bootstrap/lib/MenuItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import { Link, Route } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Skill X Change</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          </Nav>
          {/* <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
      </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
      </NavItem>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
