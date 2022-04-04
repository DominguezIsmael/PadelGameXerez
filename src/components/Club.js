import React, { Component } from 'react';
import { Container, Row, Col, Image, ProgressBar, Card, CardGroup } from 'react-bootstrap';
import ImageClub from '../assets/images/Exterior/ImageClub.jpg';
import ClubCard1 from '../assets/images/ClubCard1.png';
import ClubCard2 from '../assets/images/ClubCard2.png';
import ClubCard3 from '../assets/images/ClubCard3.png';
import ClubCard4 from '../assets/images/ClubCard4.png';
import ClubCard5 from '../assets/images/ClubCard5.png';
import ClubCard6 from '../assets/images/ClubCard6.png';

class Club extends Component {
    render() {
        return (
            <Container>
                <Row style={{ marginTop: "50px" }}>
                    <Col>
                        <Image src={ImageClub} style={{ width: "600px", height: "400px" }} rounded />
                    </Col>
                    <Col>
                        <Card style={{ borderColor: "#17263d", marginTop: "15px" }}>
                            <Card.Header style={{ backgroundColor: "#1d498f", color: "#fff", fontWeight: "bold", textTransform: "uppercase" }}>Nuestra fiebre del pádel</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Como deporte profesional, se consagra día a día con un crecimiento exponencial. Esto no solo sucede en España, si no a nivel mundial, aunque España es a día de hoy uno de los países de referencia en su práctica.<br /><br />
                                    El número de miembros afiliados a la competición oficial es cada vez mayor y esto hace necesario instalaciones profesionales y competitivas, capaces de acoger la gran demanda de usuarios y adecuadas para albergar torneos y ligas oficiales ¡Y nosotros estamos preparados! Para ello contamos con 6 pistas profesionales listas para ti.<br /><br />
                                    En Club Más Padel hemos dado el 100% para que cuentes con instalaciones líderes en prestaciones y comodidad. Esto, sumado a la climatología afortunada de nuestra comunidad te permite disfrutar de tu deporte favorito todo el año.<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <ProgressBar animated now={100} style={{ marginTop: "50px", marginBottom: "50px" }} />
                <h1 style={{ fontWeight: "bold", textTransform: "uppercase", textAlign:"center", color: "#1d498f", marginTop: "50px", marginLeft: "50px" }}>Servicios</h1>
                <br/>

                <Container style={{ display: "flex", justifyContent: "center" }}>
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={ClubCard1} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>Alquiler de pistas online o por teléfono</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={ClubCard2} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>Distribuidora de material deportivo especializada y con descuentos para socios</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={ClubCard3} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>Programas especializados de preparación física</Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                            <CardGroup>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={ClubCard4} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>Clases individualizadas o por grupos</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={ClubCard5} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>Liga interna</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={ClubCard6} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>Organización de torneos periódicos</Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>


            </Container>
        );
    }
}

export default Club;