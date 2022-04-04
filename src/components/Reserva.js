import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import LoginReserva from './LoginReserva';

class Reserva extends Component{
    render(){
        return(
            <Container style={{ marginTop: "50px" }}>
                <Form style={{backgroundColor:"#1d498f", borderRadius:"20px", padding:"10px", fontWeight: "bold", textTransform: "uppercase", color: "#fff"}}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="diaReserva">
                                <Form.Label>Elija el dia:</Form.Label>
                                <Form.Control type="date" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="horaReserva">
                                <Form.Label>Elija la hora:</Form.Label>
                                <Form.Control type="time" placeholder="hora de la reserva" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="numeroPista">
                                <Form.Label>Elija el numero de pista:</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Las pistas</option>
                                    <option value="1">1. La central</option>
                                    <option value="2">2. La pista rosa</option>
                                    <option value="3">3. La del rincón</option>
                                    <option value="4">4. La del medio</option>
                                    <option value="5">5. La de las clases</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="nombreUsuario">
                                <Form.Label>¿A nombre de quién?</Form.Label>
                                <Form.Control type="text" placeholder="Escriba un nombre" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="light" type="submit">
                        Reservar
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Reserva;