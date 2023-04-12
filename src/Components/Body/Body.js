import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Meetup from "../Posts/Meetup/Meetup";
import Job from "../Posts/Job/Job";
import "./Body.css";
import Sidebar from "../Sidebar/Sidebar";
import Article from "../Posts/Article/Article";

const Body = () => {

  return (
    <Container>
      <Row>
        <Col md={8} className="bb">
          <Article />
          {/* <Meetup />
          <Job /> */}
        </Col>
        <Col md={4} className="dd">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
