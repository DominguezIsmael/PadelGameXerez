import React, { useState } from "react";
import { Url } from "../assets/servicios/Url";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import md5 from "md5";


const LoginReserva = () => {

    const md5 = require("md5");

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const [existe, setExiste] = useState(true);

    const loginUsuario = (e) => {
        fetch(Url + "loginReserva.php?email=" + email + "&password=" + md5(pass))
            .then((r) => r.json())
            .then(r => {
                if (r.success === 0) {
                    alert("Email o password incorrectos.");
                    setExiste(false)
                }
                else {
                    console.log(r)
                    setExiste(true)
                    setEmail(r)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col style={{ backgroundColor: "#1d498f", borderRadius: "20px", padding: "10px", fontWeight: "bold", textTransform: "uppercase", color: "#fff" }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Correo electrónico:</Form.Label>
                                <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="example@example.com" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="pass">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control onChange={(e) => { setPass(e.target.value) }} type="password" placeholder="*****" />
                            </Form.Group>
                            <Button variant="primary" onClick={loginUsuario}>
                                Iniciar sesión
                            </Button>
                            {
                                !existe ?
                                    (
                                        <div className="alert-danger text-center">{"Email o password incorrectos."}</div>
                                    ) :
                                    (
                                        <span/>
                                    )
                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginReserva;