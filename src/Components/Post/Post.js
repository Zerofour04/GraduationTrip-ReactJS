import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Post.css";

const Post = () => {
  return (
    <Card className="text-left mt-3">
      <Card.Img
        className="img"
        variant="top"
        src="https://media.vrbo.com/lodging/33000000/32480000/32477200/32477106/d667daf4.f10.jpg"
      />
      <Card.Body className="p-4">
        <h5>Article</h5>
        <Row>
          <Col
            md={9}
            className="p-2 align-self-center d-flex align-items-start"
          >
            {" "}
            <h4>What if s brands had regular fonts? Meet RegulaBrands!</h4>
          </Col>
          <Col md={3} className="text-right">
            {" "}
            <i className="fa fa-ellipsis-h mt-3 mx-2 d-flex justify-content-end"></i>
          </Col>
        </Row>
        <Row>
          <p className="px-2">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </Row>
        <Row>
          <Col className="d-flex">
            <div className="pr-2">
              {" "}
              <i className="px-2 fa fa-user"></i>
            </div>
            <div className="px-2 writer">Sarthak Kamra</div>
            <div className="ml-auto d-flex align-items-center">
              <i className="px-2 fa fa-eye gray-txt"></i>
              <div className="gray-txt">1.4k views</div>
              <i className="fa fa-share-alt ml-3 share-btn"></i>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Post;
