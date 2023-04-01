import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Col className="d-md-none">
          <Row className="mx-3">
            <div className="d-flex align-items-center mt-4">
              <i className="fa fa-arrow-left txt-white"></i>

            </div>
          </Row>
        </Col>
        <h1 className="title">Feed von Zerofour04</h1>
        <p className="subtitle">Entwickler</p>
      </Container>
    </div>
  );
};

export default Banner;
