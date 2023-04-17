import React from "react";
import "./PostFooter.css";
import { Row, Col } from "react-bootstrap";
import AvatarBen from './AvatarBen.png';

const PostFooter = () => {
  return (
    <div>
      <Row className="">
        <Col className="d-flex mt-3">
          <div className="pr-2">
            {" "}
            <img
              className="profile-img mx-2"
              src={AvatarBen}
            />{" "}
          </div>
          <div className="px-2 writer">Ben Ho</div>
          <div className="ml-auto d-flex align-items-center">
            Zuletzt aktualisiert: 17.04.2023
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostFooter;
