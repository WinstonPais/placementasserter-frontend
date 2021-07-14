import React from 'react';
import {
    Navbar,
    Nav
  } from 'react-bootstrap';
import placementImg from './asset/placement.png';
import classes from './Navbar.module.css';

const NavBar = () => {
  return (
      <Navbar sticky="top" variant="dark" className={classes.navbar} expand="lg">
        <Navbar.Brand className={classes.position} href="/placementasserter-frontend">
          <img src={placementImg} alt="Placement" width="90" height="100" className="d-inline-block align-top"/>
          </Navbar.Brand>
        <Navbar.Brand href="/placementasserter-frontend">
          <h5>Placement Asserter</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link className="me-5" href="/placementasserter-frontend"><h5>Home</h5></Nav.Link>
          <Nav.Link className="me-5" href="/placementasserter-frontend/contactpage"><h5>Contact</h5></Nav.Link>
          <Nav.Link className="me-5" href="/placementasserter-frontend/Login"><h5>Log In/Out</h5></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar