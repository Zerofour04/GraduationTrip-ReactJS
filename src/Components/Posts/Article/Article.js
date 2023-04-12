import React, { useState } from "react";
import "./Article.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import PostFooter from "../PostFooter/PostFooter";
import PostDropDown from "../PostDropDown/PostDropDown";
import ArticlePicture from './ssss.jpg'
import { FaDownload, FaHouseUser } from 'react-icons/fa';
import { SiGooglemaps } from "react-icons/si";
import { BsFillFuelPumpFill, BsCashStack, BsPaypal } from "react-icons/bs";
import { FcAutomotive, FcAdvance, FcHome } from "react-icons/fc";
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Toast from 'react-bootstrap/Toast';


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
          <Alert variant="warning">
            <Alert.Heading>Achtung</Alert.Heading>
            <p>
              Diese Website wurde von Ben programmiert. Möglicherweise sind auf der Website einige Bugs zu finden, da diese Website auf die Schnelle aufgesetzt wurde.
            </p>
            <hr />
            <p className="mb-0">
              Diese Website soll Eltern und Klassenkameraden informieren über die Klassenfahrt
            </p>
          </Alert>
          <PostFooter />
          <p className="px-2">
            Hey, willkommen auf dieser Website, beginnen wir mal Schritt für Schritt. Ich bin Ben und bin Organisator von dieser Klassenfahrt, fahren wir los:
          </p>
          <Card style={{ width: '80rem' }}>
            <Card.Body>
              <Card.Title><FcAutomotive /><FcAdvance />Abfahrt:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">10.06.23 - 7:30Uhr</Card.Subtitle>
              <Card.Text>
                Um ideal anzukommen für den Check-In, sollten wir ca. um 7:30 Uhr losfahren am 10.06.2023.
              </Card.Text>
              <Card.Text>
                Die schnellste Route beträgt ca. 640km und dauer 7h 15min. Die Route verläuft durch Österreich, Slowenien und Kroatien. Es gibt auch alternative Routen, jedoch
                dauert es länger und man spart nicht unbedingt mehr Geld.
              </Card.Text>
            </Card.Body>
          </Card>
          <a href="https://www.google.de/maps/dir/Staatl.+Fachoberschule+u.+Berufsoberschule+Fürstenfeldbruck,+Münchner+Str.+67,+82256+Fürstenfeldbruck,+Deutschland/52100,+Banjole,+Kroatien" target="_blank" rel="noopener noreferrer">
            <button class="btn btn-outline-secondary btn-block maps-btn"><SiGooglemaps />Link: Route (Google Maps)</button>
          </a>
        </Row>
        <br></br>
        <Row>
          <CardGroup>
            <Card style={{ width: '80rem' }}>
              <Card.Header><h4>Kosten für die Hinfahrt</h4></Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><h6><BsFillFuelPumpFill />Verbrauchskosten: 100€</h6></ListGroup.Item>
                <ListGroup.Item><BsCashStack />+Österreich: Vignetengebühr (AT) 9,90€</ListGroup.Item>
                <ListGroup.Item><BsCashStack />+Österreich: Mautgebühren (AT) 21,30€</ListGroup.Item>
                <ListGroup.Item><BsCashStack />+Slowenien: Vignetengebühr (SI) 15,00€</ListGroup.Item>
                <ListGroup.Item><BsCashStack />+Kroatien: Mautgebühren (HR) 6,10€</ListGroup.Item>
                <ListGroup.Item><h6><BsCashStack />=Gebührenpflichtige Abschnitte 52,30€</h6></ListGroup.Item>
                <ListGroup.Item><h6>Kosten für 4 Leute je Auto : 38€</h6></ListGroup.Item>
              </ListGroup>
            </Card>


            <Card border="warning" style={{ width: '18rem' }}>
              <Card.Header><h4>Hinweis</h4></Card.Header>
              <Card.Body>
                <Card.Title>Kosten</Card.Title>
                <Card.Text>
                  <i>Die Kosten untescheiden sich natürlich, wie viel das Auto verbraucht, wie die Mautpreise berechnet werden an den bestimmten Tagen. Die Angaben hier soll nur eine Abschätzung sein.
                  </i>
                </Card.Text>
                <Card.Text>
                  Bei den Angaben wurde hiermit berechnet: (7,5l/100km bei 1,86€/l)
                </Card.Text>
                <Card.Text>
                  Die Mautkosten wurden entnommen von ADAC
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
        <br />
        <Row>
          <h2>Unterkunft</h2>
          <Card style={{ width: '80rem' }}>
            <Card.Body>
              <Card.Title><FcAdvance /><FcHome />Ankunft:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">10.06.23 - 16:00Uhr</Card.Subtitle>
              <Card.Text>
                Da um 16:00 Uhr Check-In ist, werden alle formele Sachen abgearbeitet, wir übergeben das Geld (Kaution, Kosten) und erhalten die Schlüssel. Die anfallenden Kosten
                wurden bereits eingesammelt auf
                <Card.Link href="https://www.paypal.com/pools/c/8RCHTCf7UR" target="_blank" rel="noopener noreferrer"><BsPaypal />PayPal.</Card.Link>
              </Card.Text>
              <a href="https://fewo-direkt.de/ferienwohnung-ferienhaus/p6879604" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-outline-secondary btn-block house-btn"><FaHouseUser />Unterkunft</button>
              </a>
              <Table striped >
                <thead>
                  <tr>
                    <th>Betrag:</th>
                    <th>Verwendungszweck:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>800€</td>
                    <td>Kaution</td>
                  </tr>
                  <tr>
                    <td>4.800€ für 7 Nächte</td>
                    <td>Übernachtung</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>sind 240€(Übernachtung) + 40€(Kaution)</td>
                  </tr>
                </tbody>

              </Table>
              <Alert key='danger' variant='danger'>
                Da wir die Anzahlung über PayPal getätigt habe, wäre es ganz gut, wenn jeder noch 10€ mitnehmen würden für die Bearbeitungsgebühren und Trinkgeld.
              </Alert>
              <Card.Text>
                Sonst verfügt die Villa über 500m² Platz
              </Card.Text>
            </Card.Body>
          </Card>
          <Table striped >
            <thead>
              <tr>
                <th>Zimmer</th>
                <th>Zusatzinformation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9 Schlafzimmer</td>
                <td>13 Betten</td>
              </tr>
              <tr>
                <td>7 Badezimmer</td>
                <td>5 Badezimmer - 2 Gäste-WCs</td>
              </tr>
            </tbody>
          </Table>
          <Table striped >
            <thead>
              <tr>
                <th colSpan={2}>Leben, kochen, wohnen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Küche </td>
                <td>Balkon</td>
              </tr>
              <tr>
                <td>Wohnzimmer</td>
                <td>Garten</td>
              </tr>
              <tr>
                <td>Terasse</td>
                <td>Veranda</td>
              </tr>
            </tbody>
          </Table>
          <Table striped >
            <thead>
              <tr>
                <th colSpan={2}>Ausstattungsmerkmale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Klimaanlange</td>
                <td>Heizung</td>
              </tr>
              <tr>
                <td>Parkplatz</td>
                <td>Haustiere willkommen</td>
              </tr>
              <tr>
                <td>TV</td>
                <td>Kamin</td>
              </tr>
              <tr>
                <td>Satelliten-/Kabel-TV</td>
                <td>Pool</td>
              </tr>
              <tr>
                <td>Internet</td>
                <td>Rollstuhlgerecht</td>
              </tr>
            </tbody>
          </Table>
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




            <a href="https://res.cloudinary.com/adacde/image/upload/v1571649306/ADAC-eV/KOR/Text/PDF/reisevollmacht-englisch_kutovt.pdf" target="_blank" rel="noopener noreferrer">
              <button class="btn btn-outline-secondary btn-block download-btn"><FaDownload />Vollmacht herunterladen</button>
            </a>
          </p>
        </Row>
      </Card.Body>
    </Card>
  )
};

export default Article;
