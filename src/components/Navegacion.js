import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BsInstagram, BsTwitter, BsWhatsapp, BsFacebook } from "react-icons/bs";
import logo from '../assets/images/logoPadel.png';
import Home from './Home';
import Club from './Club';
import Instalaciones from "./Instalaciones";
import Contacta from "./Contacta";
import Reserva from "./Reserva";

class Navegacion extends React.Component {
    render() {
        return (
            <>
                <HashRouter>
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#17263d" }}>
                        <img
                            src={logo}
                            width="70"
                            height="53"
                            className="d-inline-block align-top"
                            alt="logoPadel"
                            style={{ marginLeft: "25px" }}
                        />
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation"></button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId" style={{ marginLeft: "50px", fontWeight: "bold" }}>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/club"}>Club</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/instalaciones"}>Instalaciones</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/contacta"}>Contacta</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/reserva"}>Reserva</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/club' element={<Club />} />
                        <Route path='/instalaciones' element={<Instalaciones />} />
                        <Route path='/contacta' element={<Contacta />} />
                        <Route path='/reserva' element={<Reserva />} />
                    </Routes>
                </HashRouter>
                <footer style={{ backgroundColor: "#17263d", color:"#fff", marginTop:"50px" }}>
                    <Container>
                        <Row>
                            <Col style={{margin:"20px"}}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12802.688597336304!2d-6.135186279577627!3d36.658337059481916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc6662b2b297b%3A0x48d74442d705783d!2sPadel%20Game%20Xerez!5e0!3m2!1ses!2ses!4v1648638373040!5m2!1ses!2ses" width="400" height="300" style={{border:"1"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Col>
                            <Col style={{margin:"20px"}}>
                            <a href='https://www.instagram.com/padelgamexerez/?hl=es' style={{color:"#fff", textDecoration:"none"}}><BsInstagram size={50} style={{marginRight:"10px"}}/>¡Échale un vistazo a nuestro Instagram!</a>
                            <br/><br/>
                            <a href='https://www.instagram.com/padelgamexerez/?hl=es' style={{color:"#fff", textDecoration:"none"}}><BsFacebook size={50} style={{marginRight:"10px"}}/>¡Échale un vistazo a nuestro Facebook!</a>
                            <br/><br/>
                            <a href='tel:+34677579339' style={{color:"#fff", textDecoration:"none"}}><BsWhatsapp size={50} style={{marginRight:"10px"}}/>Llámanos si quieres saber algo.</a>
                            <br/><br/>
                            <a href='https://www.instagram.com/padelgamexerez/?hl=es' style={{color:"#fff", textDecoration:"none"}}><BsTwitter size={50} style={{marginRight:"10px"}}/>¡Échale un vistazo a nuestro Twitter!</a>
                            <br/>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }

}


export default Navegacion;