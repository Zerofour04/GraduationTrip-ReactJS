import React, { useState } from "react";
import "./Article.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import PostFooter from "../PostFooter/PostFooter";
import PostDropDown from "../PostDropDown/PostDropDown";
import ArticlePicture from './ssss.jpg'
import KostenAufderRoute from './KostenAufDerRoute.png';
import { FaDownload, FaHouseUser } from 'react-icons/fa';
import { SiGooglemaps } from "react-icons/si";

const Article = () => {
  return(
    <Card className="text-left mt-3">
      <Card.Img
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
          <Col className="d-flex">
            <div className="px-2 pb-2">
              <i className="fa fa-calendar"></i>
              <span className="ml-1 txt-bold">Sa, 10 Juni, 2023 - Sa, 17, Juni, 2023</span>
            </div>
            <div className="px-2 pb-2">
              <i className="fa fa-map-marker"></i>
              <span className="ml-1 txt-bold">Banjole, Kroatien</span>
            </div>
          </Col>
        </Row>
        <Row>
          <p className="px-2">
            Hey, dies ist sind alle wichtigen Informationen für die Abi-Reise. 
          </p>
          <br></br>
          Natürlich kostet die Fahrt dahin auch was, hier sind die anfallenden Kosten:
          <Card.Img variant="bottom" src={KostenAufderRoute} />
          <br></br>
          Wichtige Links:
          <p>
            <Button variant="info" target="_blank" rel="noopener" type="button" class="btn btn-outline-secondary btn-block download-btn" href="https://res.cloudinary.com/adacde/image/upload/v1571649306/ADAC-eV/KOR/Text/PDF/reisevollmacht-englisch_kutovt.pdf"><FaDownload/>Vollmacht herunterladen</Button>{' '}
            <Button variant="dark" target="_blank" rel="noopener" type="button" class="btn btn-outline-secondary btn-block maps-btn" href="https://www.google.de/maps/dir/Staatl.+Fachoberschule+u.+Berufsoberschule+Fürstenfeldbruck,+Münchner+Str.+67,+82256+Fürstenfeldbruck,+Deutschland/52100,+Banjole,+Kroatien"><SiGooglemaps/>Route (Google Maps)</Button>
            <Button variant="primary" target="_blank" rel="noopener"type="button" class="btn btn-outline-secondary btn-block house-btn" href="https://fewo-direkt.de/ferienwohnung-ferienhaus/p6879604"><FaHouseUser/>Unterkunft</Button>
          </p>

        </Row>
        <PostFooter />
      </Card.Body>
    </Card>
  )
};

export default Article;
