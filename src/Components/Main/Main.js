import React from "react";
import { Button, Container } from "react-bootstrap";
import { FcDocument } from "react-icons/fc";
import Body from "../Body/Body";
import Menu from "../Menu/Menu";
import "./Main.css";

function warnung() {
  alert('Diese Kontaktmöglichkeit ist noch nicht verfügbar!');
}

const Main = () => {
  return (
    <Container>
      <Menu />
      <Body />
      <Button className="fix">
        <i className="icon" onClick={warnung}><FcDocument/></i>
      </Button>
    </Container>
  );
};

export default Main;
