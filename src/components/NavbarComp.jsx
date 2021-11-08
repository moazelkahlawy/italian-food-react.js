import React from "react";
import logo from '../assets/Logo.png'
import "../styles/Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
function NavbarComp() {
  return (
      <Navbar className="bg-transparent" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home" className="me-lg-5">Home</Nav.Link>
              <Nav.Link href="#menu" className="me-lg-5">Menu</Nav.Link>
              <Nav.Link href="#ourStory" className="me-lg-5">Our Story</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavbarComp;
