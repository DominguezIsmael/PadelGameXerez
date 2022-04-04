import { Container } from 'bootstrap-4-react/lib/components/layout';
import { Carousel, Button, ProgressBar, ListGroup, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import primeraCarrusel from '../assets/images/Detalles/primeraCarrusel.jpg';
import segundaCarrusel from '../assets/images/Detalles/segundaCarrusel.jpg';
import terceraCarrusel from '../assets/images/Detalles/terceraCarrusel.jpg';
import ModalReact from './ModalReact';
import { Link } from 'react-router-dom';
import Reserva from './Reserva';
import { Url } from '../assets/servicios/Url';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {precios:[]};
    }
    componentDidMount(){
        fetch(Url+"/precio.php")
        .then(r => r.json())
        .then(data=>{
            this.setState({precios:data})
           console.log("Home",this.state.precios);
        })
    }
    render() {
        return (
            <Container>
                <Carousel style={{ marginTop: "50px" }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={primeraCarrusel}
                            alt="First slide"
                            style={{ width: "1290px", height: "700px" }}
                        />
                        <Carousel.Caption>
                            <h1>¡Bienvenidos a nuestra nueva web!</h1>
                            <h3>Estábamos ansiosos por que nos visitaras.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={segundaCarrusel}
                            alt="Second slide"
                            style={{ width: "1290px", height: "700px" }}
                        />
 
                        <Carousel.Caption>
                            <h1>Hazte socio y paga menos</h1>
                            <ModalReact precios={this.state.precios}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={terceraCarrusel}
                            alt="Third slide"
                            style={{ width: "1290px", height: "700px" }}
                        />

                        <Carousel.Caption>
                            <h1>¿Estás preparado para jugar en nuestro club?</h1>
                            <Link to={"/reserva"}><Button variant="success" size="lg" type="button">Reserva aquí.</Button></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <ProgressBar animated now={100} style={{ marginTop: "50px", marginBottom: "50px" }} />

                <h1 style={{ fontWeight: "bold", textAlign: "center", color: "#1d498f" }}>Para vosotros, lo más importante.</h1>
                <br />

                <ListGroup variant='flush'>
                    <ListGroup.Item>Nuestro objetivo es que disfrutes del pádel en estado puro, no sólo por poner a tu disposición las mejores instalaciones para su práctica, sino también por estar orientados a un servicio de calidad.</ListGroup.Item>
                    <ListGroup.Item>Nuestras pistas son las de última generación que ofrece el mercado, siendo las mismas que las utilizadas en el circuito oficial World Padel Tour.</ListGroup.Item>
                    <ListGroup.Item>Sus instalaciones han sido concebidas desde su origen para la práctica del pádel. Ni la climatología, ni la altura de la cubierta, ni la temperatura impedirán que saques el máximo partido a tu experiencia de juego.</ListGroup.Item>
                    <ListGroup.Item>Cinco pistas de cristal de máxima calidad con las medidas oficiales preparadas para dar respuesta a las exigencias de los jugadores más avanzados y de los que buscan diversión.</ListGroup.Item>
                    <ListGroup.Item>Contamos con profesionales acreditados en sus respectivos ámbitos de actuación, los cuales te invitamos a conocer.</ListGroup.Item>
                </ListGroup>


            </Container>
        );
    }
}

export default Home;