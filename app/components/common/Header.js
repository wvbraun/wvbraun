"use strict";

import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar inverse staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/">wvbraun</IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/glytch">
            <NavItem eventKey={1}>Glytch</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
