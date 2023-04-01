import React from "react";
import "./Header.css";
import { Container, Navbar, Nav, Form, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header py-2 d-sm-none d-md-block d-none">
      <Navbar>
        <Container>
          <Col>
            <Row>
              <Col md={4} className="logo bb">
                <Navbar.Brand>Brand</Navbar.Brand>
              </Col>
              <Col md={8}>
                <Nav>
                  <Col>
                    <Row>
                      <Col md={10} className="create-account bb">
                        <Nav.Link>
                          Create account.{" "}
                          <span className="blue_txt">It's free!</span>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </Col>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
