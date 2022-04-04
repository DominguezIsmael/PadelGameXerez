import React from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button, Card, CardGroup } from 'react-bootstrap';
import mapIcono from '../assets/images/MapPunto.png';
import telefonoIcono from '../assets/images/Numero.png';
import rrssIcono from '../assets/images/redesSociales.png';
import horarioIcono from '../assets/images/Horario.png';

export default function ContactUs() {

    function enviarEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_3r51xhf', 'template_9fvnoek', e.target, 'fXTi1dwjAh71oGcgl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Container style={{ marginTop: "50px" }}>
            <Row>
                <Col style={{backgroundColor:"#1d498f", borderRadius:"20px"}}>
                    <h4 style={{ fontWeight: "bold", textTransform: "uppercase", color: "#fff"}}>Envíanos un mensaje a través de éste formulario:</h4><br/>
                    <Form onSubmit={enviarEmail} style={{ fontWeight: "bold", textTransform: "uppercase", color: "#fff", marginTop:"5px"}}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" name="nombreUsuario" placeholder="¿Cómo te llamas?" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="emailUsuario" placeholder="¿Cuál es tu correo electrónico?" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Asunto:</Form.Label>
                            <Form.Control type="text" name="asuntoMensaje" placeholder="Describe el asunto del mensaje" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} name="mensaje" placeholder="Cuéntanos cual es tu duda o problema." />
                        </Form.Group>
                        <div style={{textAlign:"center"}}>
                        <Button variant="light" type="submit" value="Send" style={{marginBottom:"15px", color:"#1d498f", fontWeight:"bold"}}>Enviar</Button>
                        </div>
                    </Form>
                </Col>
                <Col>
                <h4 style={{ fontWeight: "bold", textTransform: "uppercase", color: "#1d498f"}}>Otras formas de contacto:</h4><br/>
                <CardGroup>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={mapIcono} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>Pol. Ind. el Portal, C. Sudáfrica, 132, 11408 Jerez de la Frontera, Cádiz</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={horarioIcono} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>De 08:00 a 14:00 <br/> De 16:00 a 00:00</Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                            <CardGroup>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={telefonoIcono} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>+34 677 57 93 39</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: "none" }}>
                                    <Card.Img variant="top" src={rrssIcono} style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign:"center"}}>Nuestras redes sociales</Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                </Col>
            </Row>
        </Container>
    );
}