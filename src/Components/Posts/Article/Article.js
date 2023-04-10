import React, { useState } from "react";
import "./Article.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import PostFooter from "../PostFooter/PostFooter";
import PostDropDown from "../PostDropDown/PostDropDown";
import ArticlePicture from './ssss.jpg'
import { FaDownload, FaHouseUser } from 'react-icons/fa';
import { SiGooglemaps } from "react-icons/si";
import { BsFillFuelPumpFill, BsCashStack } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';


const Article = () => {
  return (
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
        </Row>
        <br></br>
        <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Header><h4>Kosten für die Hinfahrt</h4></Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><BsFillFuelPumpFill />Verbrauchskosten: 100€</ListGroup.Item>
              <ListGroup.Item><BsCashStack />Mautkosten: 52,30€</ListGroup.Item>
              <ListGroup.Item>Kosten für 4 Leute je Auto : 38€</ListGroup.Item>
              <botton variant="dark" target="_blank" rel="noopener" type="button" class="btn btn-outline-secondary btn-block maps-btn" href="https://www.google.de/maps/dir/Staatl.+Fachoberschule+u.+Berufsoberschule+Fürstenfeldbruck,+Münchner+Str.+67,+82256+Fürstenfeldbruck,+Deutschland/52100,+Banjole,+Kroatien"><SiGooglemaps />Route (Google Maps)</botton>

            </ListGroup>
          </Card>

          <Card border="warning" style={{ width: '18rem' }}>
            <Card.Header>Hinweis für die Hinfahrt</Card.Header>
            <Card.Body>
              <Card.Title>Kosten</Card.Title>
              <Card.Text>
                <i>Die Kosten untescheiden sich natürlich, wie viel das Auto verbraucht, wie die Mautpreise berechnet werden an den bestimmten Tagen. Die Angaben hier soll nur eine Abschätzung sein.
                </i>

              </Card.Text>
              <Card.Text>
                Bei den Angaben wurde hiermit berechnet: (7,5l/100km bei 1,86€/l) | Mautkosten Quelle von ADAC
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <br/>
        <Row>
        <h2>Unterkunft</h2>
        <botton variant="primary" target="_blank" rel="noopener" type="button" class="btn btn-outline-secondary btn-block house-btn" href="https://fewo-direkt.de/ferienwohnung-ferienhaus/p6879604"><FaHouseUser />Unterkunft</botton>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.vrbo.com/lodging/33000000/32480000/32477200/32477106/d667daf4.f10.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Bilder von der Unterkunft</h3>
                <p>Mehr Bilder sind im Link enthalten</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.vrbo.com/lodging/33000000/32480000/32477200/32477106/652f95ac.f10.jpg"
                alt="Second slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.vrbo.com/lodging/33000000/32480000/32477200/32477106/db2a4429.f10.jpg"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.vrbo.com/lodging/33000000/32480000/32477200/32477106/929ac7ce.f10.jpg"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.vrbo.com/lodging/33000000/32480000/32477200/32477106/332f4cc5.f10.jpg"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.vrbo.com/lodging/33000000/32480000/32477200/32477106/411523cb.f10.jpg"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.vrbo.com/lodging/33000000/32480000/32477200/32477106/522ac963.f10.jpg"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.vrbo.com/lodging/33000000/32480000/32477200/32477106/acc56fbf.f10.jpg"
                alt="Third slide"
              />

            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>


          <br></br>
          Wichtige Links:
          <p>
            <botton target="_blank" rel="noopener" type="button" class="btn btn-outline-secondary btn-block download-btn" href="https://res.cloudinary.com/adacde/image/upload/v1571649306/ADAC-eV/KOR/Text/PDF/reisevollmacht-englisch_kutovt.pdf"><FaDownload />Vollmacht herunterladen</botton>{' '}
          </p>
        </Row>
        <PostFooter />
      </Card.Body>
    </Card>
  )
};

export default Article;
