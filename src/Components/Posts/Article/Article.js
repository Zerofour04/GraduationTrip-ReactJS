import React, { useState } from "react";
import "./Article.css";
import { Card, Button, Row, Col, ToastContainer } from "react-bootstrap";
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
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';
import Weather from "../../api/Weather";
import TravelAdvice from "./components/TravelAdvice";
import Iframe from 'react-iframe'
import PackageList from "./components/PackageList";

const Article = () => {
  return (
    <Card className="text-left mt-3">
      <Card.Img
        variant="top"
        src={ArticlePicture}
      />
      <Card.Body className="p-4">
        <h5 id="abi-reise">Reiseplaner / Reiseinformationen</h5>
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
            Hey, willkommen auf dieser Website, ich bin Ben und bin Organisator von dieser Klassenfahrt, auf dieser Website stehen alle wichtigen Informationen und bevorstehende Kosten.
            Sollte es fragen geben, stehe ich gerne offen, diese zu beantworten.
          </p>
        </Row>
        <Row>
          <h2 className="text-center mb-5">Aktueller Feed</h2>
          <PostFooter />

          <Toast>
            <Toast.Header closeButton={false}>
              <img className="rounded me-2" alt="" />
              <strong className="me-auto">
                <Badge bg="danger" text="dark">
                  Dringender Hinweis
                </Badge>{' '}
                Ben
              </strong>
              <small>31. Mai 2023</small>
            </Toast.Header>
            <Toast.Body>
            Da der Fahrer, der ursprünglich für die Fahrt vorgesehen war, seinen Führerschein verloren hat, muss die Gruppe eine alternative Lösung finden, um an der Fahrt teilzunehmen.</Toast.Body>
          </Toast>
          <p />
          <Toast>
            <Toast.Header closeButton={false}>
              <img className="rounded me-2" alt="" />
              <strong className="me-auto">
                <Badge bg="danger" text="dark">
                  Dringender Hinweis
                </Badge>{' '}
                Ben
              </strong>
              <small>31. Mai 2023</small>
            </Toast.Header>
            <Toast.Body>
            Vor vier Wochen hat sich ein Schüler, der Teil unserer Gruppe ist und als Fahrer eingeplant war, eine Zehenverletzung zugezogen. Aufgrund dieser Verletzung ist es ihm nicht möglich, als Fahrer zu fungieren.</Toast.Body>
          </Toast>
          <p />
          <Toast>
            <Toast.Header closeButton={false}>
              <img className="rounded me-2" alt="" />
              <strong className="me-auto">
                <Badge bg="warning" text="dark">
                  Hinweis
                </Badge>{' '}
                Ben
              </strong>
              <small>17. April 2023</small>
            </Toast.Header>
            <Toast.Body>
              Da wir noch nicht darüber gesprochen haben, wie wir unseren Urlaub gestalten möchten, kann ich nur eine grobe Schätzung abgeben. Es ist anzunehmen, dass jeder von uns etwa 200-300€ für die Essensverpflegung benötigen wird. Sobald wir Einzelheiten besprochen haben, können wir eine genauere Kostenschätzung machen.
            </Toast.Body>
          </Toast>
          <p />

          <Toast>
            <Toast.Header closeButton={false}>
              <img className="rounded me-2" alt="" />
              <strong className="me-auto">
                <Badge bg="info" text="dark">
                  Info
                </Badge>{' '}
                Ben
              </strong>
              <small>17. April 2023</small>
            </Toast.Header>
            <Toast.Body>Die Reisehinweise sind selbstverständlich wichtige Vorsichtsmaßnahmen und können auf den ersten Blick überwältigend wirken. Meiner Meinung nach kann es jedoch ausreichen, eine Checkliste aus dem Internet herunterzuladen und diese zu beachten. Es ist jedoch empfehlenswert, dass Eltern sich zumindest einmal einen Überblick über die Hinweise verschaffen, um mögliche Risiken zu minimieren. Besonders bei Reisen mit Minderjährigen ist es unbedingt erforderlich, eine Vollmacht herunterzuladen, um eventuelle Schwierigkeiten bei der Einreise zu vermeiden.
            </Toast.Body>
          </Toast>
        </Row>

        <Row>
          <h2 className="text-center mb-5">Fahrt</h2>

          <Card style={{ width: '80rem' }}>
            <Card.Body>
              <Card.Title><FcAutomotive /><FcAdvance />Abfahrt:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">10.06.23 - 7:30Uhr</Card.Subtitle>
              <Card.Text>
                Um den Check-In pünktlich und stressfrei zu erreichen, empfehle ich, am 10.06.2023 in der Früh um etwa 7:30 Uhr abzufahren.
              </Card.Text>
              <Card.Text>
                Die schnellste Route, welche durch Österreich, Slowenien und Kroatien führt, beträgt ca. 640 km und dauert 7 Stunden und 15 Minuten. Es gibt zwar alternative Routen, diese dauern jedoch länger und es besteht keine Garantie, dass man dadurch Geld spart.
              </Card.Text>
            </Card.Body>
          </Card>
          <a href="https://www.google.de/maps/dir/Staatl.+Fachoberschule+u.+Berufsoberschule+Fürstenfeldbruck,+Münchner+Str.+67,+82256+Fürstenfeldbruck,+Deutschland/52100,+Banjole,+Kroatien" target="_blank" rel="noopener noreferrer">
            <button class="btn btn-outline-secondary btn-block maps-btn"><SiGooglemaps />Link: Route (Auto)</button>
          </a>
          <a href="https://goo.gl/maps/Ywq3FTUsP7WwKP699" target="_blank" rel="noopener noreferrer">
            <button class="btn btn-outline-secondary btn-block maps-btn"><SiGooglemaps />Link: Route (FlixBus)</button>
          </a>
        </Row>
        <br></br>
        <Row>
          <CardGroup>
            <Card >
              <Card.Header><h4>Kosten für die Hinfahrt</h4></Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><BsFillFuelPumpFill />+Verbrauchskosten: 100€</ListGroup.Item>
                <ListGroup.Item><BsCashStack />+Österreich: Vignetengebühr (AT) 9,90€</ListGroup.Item>
                <ListGroup.Item><BsCashStack />+Österreich: Mautgebühren (AT) 21,30€</ListGroup.Item>
                <ListGroup.Item><BsCashStack />+Slowenien: Vignetengebühr (SI) 15,00€</ListGroup.Item>
                <ListGroup.Item><BsCashStack />+Kroatien: Mautgebühren (HR) 6,10€</ListGroup.Item>
                <ListGroup.Item><h6><BsCashStack />=Gebührenpflichtige Abschnitte ~52,30€</h6></ListGroup.Item>
                <ListGroup.Item><h6>Insgesamt: ~150€</h6></ListGroup.Item>
                <ListGroup.Item><h6>Kosten für 4 Leute je Auto : 38€</h6></ListGroup.Item>
              </ListGroup>
            </Card>

            <Card border="warning" >
              <Card.Header><h4>Hinweis</h4></Card.Header>
              <Card.Body>
                <Card.Title>Kosten</Card.Title>
                <Card.Text>
                  <i>Die Kosten variieren je nach dem Verbrauch des Autos, den Mautgebühren an den jeweiligen Tagen und der Anzahl der Mitfahrer im Auto. Die hier angegebenen Informationen dienen lediglich als grobe Schätzung.
                  </i>
                </Card.Text>
                <Card.Text>
                  Bei den Angaben wurde hiermit berechnet: (7,5l/100km bei 1,86€/l)
                </Card.Text>
                <Card.Text>
                  Die Mautkosten wurden entnommen von
                </Card.Text>
                <Card.Link href="https://maps.adac.de/route?places=48.17178_11.26233_6_0,44.87023_13.84553_7_0&vehicle-type=car&bounds=45.30352,8.67277-49.38967,16.87824" target="_blank" rel="noopener noreferrer">
                  ADAC
                </Card.Link> und
                <Card.Link href="https://apps.impargo.de/planner?stops[0]=82256%20Fürstenfeldbruck%2CHauptstraße%2027%2CFürstenfeldbruck%2CDeutschland,48.179140,11.254630&stops[1]=52100%20Medulin%2CBanjole%2CBanjole%2CKroatien,44.826170,13.871720" target="_blank" rel="noopener noreferrer">
                  Impargo
                </Card.Link>

              </Card.Body>
            </Card>
          </CardGroup>

          <Row>
            <br />
          </Row>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Sitzaufteilung Hinfahrt:</Card.Title>
                <Table striped >
                  <thead>
                    <tr>
                      <th>Auto</th>
                      <th>Fahrer:</th>
                      <th>Insassen:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Jasmin</td>
                      <td>Sara, Sofie, Marlena</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Bene</td>
                      <td>Fene, Maxi, Phillip</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>David</td>
                      <td>Ben, Tomi</td>
                    </tr>
                    <tr>
                      <td><del>4</del></td>
                      <td><del>Tim</del></td>
                      <td><del>Leo, Simon</del></td>
                    </tr>
                    <tr>
                      <td><del>5</del></td>
                      <td><del>Niklas</del></td>
                      <td><del>Paul G, Paul T.</del></td>
                    </tr>
                    <tr>
                      <td colSpan={3}>Marek, Till und Thomas fahren nach oder mit den Eltern</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <p />
            <Card>
              <Card.Body>
                <Card.Title>Sitzaufteilung Rückfahrt:</Card.Title>
                <Table striped >
                  <thead>
                    <tr>
                      <th>Auto</th>
                      <th>Fahrer:</th>
                      <th>Insassen:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Jasmin</td>
                      <td>Sara, Sofie, Marlena</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Bene</td>
                      <td>Fene, Maxi, Phillip</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>David</td>
                      <td>Ben, Marek, Tomi</td>
                    </tr>
                    <tr>
                      <td><del>4</del></td>
                      <td><del>Tim</del></td>
                      <td><del>Leo, Simon</del></td>
                    </tr>

                    <tr>
                      <td><del>5</del></td>
                      <td><del>Niklas</del></td>
                      <td><del>Paul G, Paul T.</del></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
        <br />
        <Row>
          <h2 className="text-center mb-5">Unterkunft</h2>

          <Card style={{ width: '80rem' }}>
            <Card.Body>
              <Card.Title><FcAdvance /><FcHome />Ankunft:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">10.06.23 - 16:00Uhr</Card.Subtitle>
              <Card.Text>
                Da der Check-In um 16:00 Uhr stattfindet, werden bei Ankunft alle Formalitäten erledigt, wie die Übergabe des Geldes (Kaution und Kosten) und die Herausgabe der Schlüssel. Die anfallenden Kosten wurden bereits im Voraus eingesammelt auf
                <Card.Link href="https://www.paypal.com/pools/c/8RCHTCf7UR" target="_blank" rel="noopener noreferrer"><BsPaypal />PayPal.</Card.Link>
              </Card.Text>
              <a href="https://fewo-direkt.de/ferienwohnung-ferienhaus/p6879604" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-outline-secondary btn-block house-btn"><FaHouseUser />Link: Unterkunft</button>
              </a>
              <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d407.04110047871563!2d13.878228299580964!3d44.827163844351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47632b5fe3acf759%3A0x7bc2bfea0d3d6acb!2s52100%2C%20Banjole%2C%20Kroatien!5e1!3m2!1sde!2sde!4v1685054021955!5m2!1sde!2sde"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              />
              <p />
              <Table striped >
                <thead>
                  <tr>
                    <th>Betrag:</th>
                    <th>Verwendungszweck:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>+800€</td>
                    <td>Kaution</td>
                  </tr>
                  <tr>
                    <td>+4.800€ für 7 Nächte</td>
                    <td>Übernachtung</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>=Insgesamt 5.600€ für die Klasse</td>

                  </tr>
                  <tr>
                    <td colSpan={2}>sind 240€(Übernachtung) + 40€(Kaution) für jede einzelne Person</td>
                  </tr>
                </tbody>

              </Table>
              <Alert key='danger' variant='danger'>
                Da wir die Anzahlung über PayPal getätigt habe, ging leider ein Bruchteil an Geld verloren, da der Vermietet auch dieses Geld natürlich Bar abheben musste.
                Deswegen wäre es dringend, dass jeder noch 10€ mitnehmen würde um diese Kosten zu begleichen.
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
        <br />
        <Row>
          <h2 className="text-center mb-5">Wetter</h2>
          <Card>
            <Card.Body>
              <Card.Title>Wetter in Banjole</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Wettervorhersage für die nächsten Tage</Card.Subtitle>
              <Weather />

            </Card.Body>
          </Card>
        </Row>
        <br />
        <Row>
          <h2 className="text-center mb-5">Reisehinweise</h2>


          <TravelAdvice />
        </Row>
        <Row>
          <Alert variant="danger">
            <Alert.Heading>Wichtig für Minderjährige</Alert.Heading>
            <p>
              Es ist ganz wichtig, dass Minderjährige eine Vollmacht mitführen, schließlich sind sie noch nicht volljährig.
            </p>
            <hr />
            <p className="mb-0">
              Ohne eine solche Einverständniserklärung kann es in manchen Ländern an der Grenze zu Problemen bei der Einreise kommen, wenn ein Kind ohne oder mit nur einer personensorgeberechtigten Person unterwegs ist. In Europa betrifft dies insbesondere Bosnien und Herzegowina, Griechenland, Großbritannien, Kroatien, Nordmazedonien, Slowenien und Serbien.
            </p>
            <hr />
            <p className="mb-0">
              Unten finden Sie eine Reisevollmacht von ADAC, die bereits übersetzt wurde auf kroatisch.
            </p>
          </Alert>
          <p>
            <a href="https://res.cloudinary.com/adacde/image/upload/v1571649899/ADAC-eV/KOR/Text/PDF/reisevollmacht-kroatien_sdd9jk.pdf" target="_blank" rel="noopener noreferrer">
              <button class="btn btn-outline-secondary btn-block download-btn"><FaDownload />Vollmacht (Deutsch-Kroatisch) herunterladen</button>
            </a>
          </p>
          <p>
            <a href="https://res.cloudinary.com/adacde/image/upload/v1571649306/ADAC-eV/KOR/Text/PDF/reisevollmacht-englisch_kutovt.pdf" target="_blank" rel="noopener noreferrer">
              <button class="btn btn-outline-secondary btn-block download-btn"><FaDownload />Vollmacht (Deutsch-Englisch) herunterladen</button>
            </a>
          </p>
        </Row>
        <br />
        <Row>
          <h2 className="text-center mb-5">Packliste für Kroatien</h2>
          <PackageList />
        </Row>
        <br />
        <Row>
          <p>
            <a href="https://www.packlisten.org/api/pdf/page/kroatien/couple//packliste-kroatien//True/Packliste%20Kroatien" target="_blank" rel="noopener noreferrer">
              <button class="btn btn-outline-secondary btn-block maps-btn"><FaDownload />Gesamte Packliste</button>
            </a>
          </p>
        </Row>
        <br />
        <Row>
          <h2 className="text-center mb-5">Reiseführer</h2>
          <p>
            <a href="https://www.kroati.de/kroatien-istrien/banjole.html" target="_blank" rel="noopener noreferrer">
              <button class="btn btn-outline-secondary btn-block house-btn"><FaDownload />Reiseführer für Banjole</button>
            </a>
          </p>
        </Row>
      </Card.Body>
    </Card >
  )
};

export default Article;
