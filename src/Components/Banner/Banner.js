import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <h1 className="title">Feed von Zerofour04</h1>
        <p className="subtitle">Entwickler</p>
      </Container>
    </div>
  );
};

export default Banner;
