import React from "react";
import { Navbar, Container, Col, Nav, Row, Button } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#abi-reise">Alle Beiträge:</Navbar.Brand>

        </Container>
      </Navbar>
    </Container>
    
  );
};

export default Menu;
