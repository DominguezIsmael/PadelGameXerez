import React, { Component } from 'react';
import { Container, Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap';
import Pista1 from '../assets/images/Pista 1/Pista1.jpg';
import Pista2 from '../assets/images/Pista 2/Pista2.jpg';
import Pista3 from '../assets/images/Pista 3/Pista3.jpg';
import Pista4 from '../assets/images/Pista 4/Pista4.jpg';
import Pista5 from '../assets/images/Pista 5/Pista5.jpg';
import Bar1 from '../assets/images/Bar/Bar1.jpg';
import Bar2 from '../assets/images/Bar/Bar2.jpg';
import Bar3 from '../assets/images/Bar/Bar3.jpg';

class Instalaciones extends Component {
    render() {
        return (
            <>
                <h1 style={{ fontWeight: "bold", textTransform: "uppercase", textDecoration: "underline", color: "#1d498f", marginTop: "50px", marginLeft: "50px" }}>"Las pistas"</h1>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body style={{ backgroundColor: "#1d498f", color: "#fff", textAlign: "center" }}>
                                    <Card.Text style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                        La favorita de todos nuestros clientes, "la central", la número 1.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={Pista1}
                                    style={{ witdh: "800px", height: "700px" }} />
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <CardGroup>
                            <Card>
                                <Card.Body style={{ backgroundColor: "#1d498f", color: "#fff", textAlign: "center" }}>
                                    <Card.Text style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                        "La pista rosa", la número 2.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={Pista2}
                                    style={{ witdh: "600px", height: "400px" }} />
                            </Card>
                            <Card>
                                <Card.Body style={{ backgroundColor: "#1d498f", color: "#fff", textAlign: "center" }}>
                                    <Card.Text style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                        "La del rincón", la número 3.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={Pista3}
                                    style={{ witdh: "600px", height: "400px" }} />
                            </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardGroup>
                            <Card>
                                <Card.Body style={{ backgroundColor: "#1d498f", color: "#fff", textAlign: "center" }}>
                                    <Card.Text style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                        "La del medio", la número 4.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={Pista4}
                                    style={{ witdh: "600px", height: "400px" }} />
                            </Card>
                            <Card>
                                <Card.Body style={{ backgroundColor: "#1d498f", color: "#fff", textAlign: "center" }}>
                                    <Card.Text style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                        "La de las clases", la número 5.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={Pista5}
                                    style={{ witdh: "600px", height: "400px" }} />
                            </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
                <h1 style={{ fontWeight: "bold", textTransform: "uppercase", textDecoration: "underline", color: "#1d498f", marginTop: "50px", marginLeft: "50px" }}>"El bar"</h1>
                <br/>
                <Container>
                <Carousel style={{ marginTop: "50px"}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Bar1}
                            alt="First slide"
                            style={{ width: "1290px", height: "700px" }}
                        />
                        <Carousel.Caption>
                            <h1>¡Bienvenidos al bar!</h1>
                            <h3>Donde podrás tomarte unos aperitivos antes o después del partido.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Bar2}
                            alt="Second slide"
                            style={{ width: "1290px", height: "700px" }}
                        />

                        <Carousel.Caption>
                            <h1>¡Puedes ver partidos desde la barra del bar!</h1>
                            <h3>A quien no le gusta ver un partido con tus compañeros mientras os pedís los aperitivos</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Bar3}
                            alt="Third slide"
                            style={{ width: "1290px", height: "700px" }}
                        />

                        <Carousel.Caption>
                            <h1>También tenemos televisión.</h1>
                            <h3>Para estar al tanto de los partidos profesionales de pádel.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Container>
            </>
        );
    }
}

export default Instalaciones;