import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AppContext } from "../AppContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { loggedInFlag } = useContext(AppContext);
  const [loggedIn, setLoggedIn] = loggedInFlag;

  return (
    <Container className="p-0 d-xs-none d-none d-sm-none d-md-block d-lg-block d-xl-block">
      <Col md={{ span: 9, offset: 3 }}>
        <Row className="mt-5">
          <Col className="d-flex">
            <div className="px-2">
              <i className="fa fa-map-marker"></i>
              <span className="ml-1 txt-bold">Germany, München</span>
            </div>
            <div className="px-2 ml-auto">
              <i className="fa fa-pencil"></i>
            </div>
          </Col>
        </Row>
        <hr className="hr" />
        <Row className="px-2">
          <Col md={1}>
            <i className="fa fa-info-circle info"></i>
          </Col>
          <Col md={11}>
            <p className="info-p mx-1">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </Col>{" "}
        </Row>
        {loggedIn ? (
          <Row className="px-2">
            <p className="recommended-gr mt-5">
              <i className="fa fa-thumbs-o-up mr-2"></i>
              <span>RECOMMENDED GROUPS</span>
            </p>
            <div className="d-flex justify-content-between mt-2">
              <img
                className="profile-img"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Button className="follow-btn " size="xs">
                Follow
              </Button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <img
                className="profile-img"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Button className="follow-btn " size="xs">
                Follow
              </Button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <img
                className="profile-img"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Button className="follow-btn " size="xs">
                Follow
              </Button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <img
                className="profile-img"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Button className="follow-btn " size="xs">
                Follow
              </Button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <img
                className="profile-img"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Button className="follow-btn " size="xs">
                Follow
              </Button>
            </div>
            <div className="d-flex justify-content-end mt-5">
              <p className="more">See More...</p>
            </div>
          </Row>
        ) : (
          ""
        )}
      </Col>
    </Container>
  );
};

export default Sidebar;
