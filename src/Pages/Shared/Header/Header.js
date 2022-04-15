import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png"

const Header = () => {
  return (
    <header className="">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt="" height={'30px'}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
