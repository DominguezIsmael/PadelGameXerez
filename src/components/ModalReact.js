import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal, Table } from 'react-bootstrap';
import { Url } from '../assets/servicios/Url';

function ModalReact() {
  const [precios, setPrecios] = useState();
  const [datosCargados, setDatosCargados] = useState(false);

  useEffect(() => {
    if (!datosCargados) {
      fetch(Url + "precio.php")
        .then(r => r.json())
        .then(data => {
          setPrecios(data);
          setDatosCargados(true);
        });
    }
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    datosCargados?
    <>
      <Button variant="primary" onClick={handleShow}>
        Precios
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lista de precios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Dias</th>
                <th>Precios socios</th>
                <th>Precios no socios</th>
              </tr>
            </thead>
           <tbody>
              <tr>
                <td>Lunes a Viernes</td>
                <td>{precios[0].precio_socio} €</td>
                <td>{precios[0].precio_normal} €</td>
              </tr>
              <tr>
                <td>Sábados y Domingos</td>
                <td>{precios[1].precio_socio} €</td>
                <td>{precios[1].precio_normal} €</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>: <span/>
  );
}

export default ModalReact;