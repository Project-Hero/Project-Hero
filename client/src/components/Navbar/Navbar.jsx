import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export const MyNavbar = () => {
    return (
        <>
<Navbar bg="primary" variant="dark">
<Container>
<Navbar.Brand href="#home">No Dork Left Behind</Navbar.Brand>
<Nav className="ml-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
</Container>
</Navbar>
</>
  );
};

export default MyNavbar;