"use strict";

import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem } from "react-bootstrap";

const Header = () => {
  return (
    <div className="row">
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">wvbraun</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/glych">
              <NavItem eventKey={1}>Glych</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
