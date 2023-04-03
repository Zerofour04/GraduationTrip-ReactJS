import React from "react";
import "./Header.css";
import { Container, Navbar, Nav, Form, Row, Col, NavbarBrand } from "react-bootstrap";
import logo from './2022-4.png';
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
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
            <a href="https://github.com/Zerofour04"><FaGithub className="navBarIcons"/>GitHub</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="https://zerofour04.me"><TbWorldWww className="navBarIcons"/>Website</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
