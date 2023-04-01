import React from "react";
import { Container, Col, Nav, Row, Button } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  return (
    <Container className="p-0 m-0">
      <Container className="pt-5 pb-3 d-none d-md-block">
        <Row>
          <Col md={6}>
            <Nav>
              <Nav.Link>
                All Posts(32)
              </Nav.Link>
            </Nav>
          </Col>
          <hr />
        </Row>
      </Container>
      <Container className="pt-5 d-md-none p-0 d-flex align-items-center justify-content-between">
        <h5 className="text-left">Posts(368)</h5>
        <Button variant="secondary" className="write-post-btn">
          Filter: All <i className="fa fa-caret-down mx-2 arrow"></i>
        </Button>
      </Container>
    </Container>
  );
};

export default Menu;
