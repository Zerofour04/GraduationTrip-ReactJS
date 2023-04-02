import React from "react";
import "./Header.css";
import { Container, Navbar, Nav, Form, Row, Col, NavbarBrand } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import logo from './2022-4.png';
import { FaGithub, FaDiscord } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="header py-2 d-sm-none d-md-block d-none">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}
            Feed von Zerofour04
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login"><FaGithub className="navBarIcons"/>Website</a>
            
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
