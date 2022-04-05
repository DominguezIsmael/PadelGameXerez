import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Url } from '../assets/servicios/Url';
import LoginReserva from './LoginReserva';

class Reserva extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            nombre:"",
            fecha:"",
            hora:"",
            pista:"",
            cliente:"",
            errores:[]
         }
    }

    cambioValor = (e) =>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state,errores:[]});
        console.log(this.state);
    }

    verificarError(elemento){
        return this.state.errores.indexOf(elemento) !==-1;
    }

    reservar(){
        //nombre, fecha, hora, cliente, pista
        //fetch a url + /reserva.php
        const{nombre,fecha,hora,pista,cliente}=this.state;
        
        var errores=[];
        if(!nombre)errores.push("error_nombre");
        if(!fecha)errores.push("error_fecha");
        if(!hora)errores.push("error_hora");
        if(!pista)errores.push("error_pista");

        this.setState({errores:errores});
        if(errores.length>0)return false;


        var datosEnviar= {nombre:nombre, fecha:fecha, hora:hora, pista:pista, cliente:cliente}

        fetch(Url+"reserva.php", {
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
              console.log(datosRespuesta);
              alert("Se ha reservado la pista");
            })
            .catch(console.log)
    }

    render(){
        this.state.cliente=this.props.id;
        return(
            <Container style={{ marginTop: "50px" }}>
                <Form onSubmit={this.reservar} style={{backgroundColor:"#1d498f", borderRadius:"20px", padding:"10px", fontWeight: "bold", textTransform: "uppercase", color: "#fff"}}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="fecha">
                                <Form.Label>Elija el dia:</Form.Label>
                                <Form.Control type="date" name="fecha" onChange={this.cambioValor} value={this.state.fecha} className={((this.verificarError("error_fecha"))?"is-invalid":"")}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="hora">
                                <Form.Label>Elija la hora:</Form.Label>
                                <Form.Control type="time" name="hora" onChange={this.cambioValor} value={this.state.hora} className={((this.verificarError("error_hora"))?"is-invalid":"")}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="pista">
                                <Form.Label>Elija el numero de pista:</Form.Label>
                                <Form.Select aria-label="Default select example" name="pista" onChange={this.cambioValor} className={((this.verificarError("error_pista"))?"is-invalid":"")}>
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
                            <Form.Group className="mb-3" controlId="nombre">
                                <Form.Label>¿A nombre de quién?</Form.Label>
                                <Form.Control type="text" name="nombre" onChange={this.cambioValor} value={this.state.nombre} className={((this.verificarError("error_nombre"))?"is-invalid":"")}/>
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