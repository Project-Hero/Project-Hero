import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export const MyNavbar = () => {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="md"
        className="justify-content-between"
      >
        <Container>
          <Navbar.Brand className="nav-brand" href="https://project-hero-jwh.herokuapp.com/">
            No Dork Left Behind
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="nav-link" href="https://project-hero-jwh.herokuapp.com/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="https://github.com/sbrunswig">
              The Man the Myth the Legend
            </Nav.Link>
            <Nav.Link className="nav-link" href="https://github.com/Project-Hero/Project-Hero">
              GitHub Docs
            </Nav.Link>
            <Nav.Link className="nav-link" href="v2.0">Tip Developers</Nav.Link>
            <Nav.Link className="nav-link" href="v2.0">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
