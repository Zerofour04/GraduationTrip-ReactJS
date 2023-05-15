import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <h1 className="title">Abi-Fahrt der FT12D</h1>
        <p className="subtitle">Entwickler dieser Website: Ben Ho</p>
      </Container>
    </div>
  );
};

export default Banner;
