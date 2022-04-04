import React from "react";
import { useState } from "react";
import { Button, Modal, Table } from 'react-bootstrap';

function ModalReact(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 // console.log(props)
  const [precios, setPrecios] = useState({});
 // console.log("Modal",props.precios);
  setPrecios(props.precios);

  return (
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
                <td>{8} €</td>
                <td>14 €</td>
              </tr>
              <tr>
                <td>Sábados y Domingos</td>
                <td>14 €</td>
                <td>20 €</td>
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
    </>
  );
}

export default ModalReact;