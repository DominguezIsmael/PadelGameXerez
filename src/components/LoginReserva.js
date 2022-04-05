import React, { useState } from "react";
import { Url } from "../assets/servicios/Url";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import md5 from "md5";
import Reserva from "./Reserva";


const LoginReserva = () => {

    const md5 = require("md5");

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const [idCliente, setIdCliente] = useState();

    const [existe, setExiste] = useState(false);

    const loginUsuario = (e) => {
        var datosEnviar= {email:email, password:md5(pass)}
        fetch(Url + "loginReserva.php",{
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
            .then((r) => r.json())
            .then(r => {
                if (r.success === 0) {
                    alert("Email o password incorrectos.");
                    setExiste(false)
                }
                else {
                    setExiste(true)
                    setIdCliente(r[0].id)
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
                    {
            !existe ?
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
                         </Form>
                         :
                         (<Reserva id={idCliente}/>)
                    }
                    </Col>
                </Row>
            </Container>            
        </>
    )
}

export default LoginReserva;