import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    // header section 
    <div>
      <div >
        <Navbar className="header-section" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand className="nav-logo" href="#home">Blue <span>Ocean</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink
                activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                  }}
                 className="link" to="/home">Home</NavLink>
                <NavLink
                activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                  }}
                className="link" to="/about">About</NavLink>
                <NavLink 
                activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                  }}
                className="link" to="/services">Services</NavLink>
                <NavLink
                activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                  }}
                className="link" to="/contact">Contact</NavLink>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
