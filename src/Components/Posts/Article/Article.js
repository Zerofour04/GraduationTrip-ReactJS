import React from "react";
import "./Article.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import PostFooter from "../PostFooter/PostFooter";
import PostDropDown from "../PostDropDown/PostDropDown";
import ArticlePicture from './ssss.jpg'

const Article = () => {
  return (
    <Card className="text-left mt-3">
      <Card.Img
        className="img"
        variant="top"
        src={ArticlePicture}
      />
      <Card.Body className="p-4">
        <h5>Abi-Reise</h5>
        <Row>
          <Col
            md={9}
            className="p-2 align-self-center d-flex align-items-start"
          >
            {" "}
            <h4>Abi-Reise der Klasse FT12D</h4>
          </Col>
          <Col md={3} className="text-right">
            <PostDropDown />
          </Col>
        </Row>
        <Row>
          <p className="px-2">
            Hey, dies ist sind alle wichtigen Informationen für die Abi-Reise. 
          </p>
        </Row>
        <PostFooter />
      </Card.Body>
    </Card>
  );
};

export default Article;
