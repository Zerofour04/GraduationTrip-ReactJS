import React from "react";
import { Button, Container } from "react-bootstrap";
import Body from "../Body/Body";
import Menu from "../Menu/Menu";
import "./Main.css";

const Main = () => {
  return (
    <Container>
      <Menu />
      <Body />

    </Container>
  );
};

export default Main;
