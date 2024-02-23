import {Container , Row, Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { leerRecetasAPI } from '../../../helpers/queries';
import { useEffect } from 'react';

const CardReceta = () => {



  return (
    <>
    <Container>
        <Row>
            <Col>
            <Card className="my-3 mx-1">
                <Card.Img
                  variant="top"
                  src='🍹'
                  className="img-fluid img-card-inicio p-2"
                />
                <Card.Body>
                  <Card.Title className="title">
                   Receta
                  </Card.Title>
                  <Card.Text>Receta de cocina</Card.Text>
                </Card.Body>
                <Card.Footer className="text-end">
                  <Link
                    className="btn  botonColorInicio text-light "
                 variant="dark"
                    /* to={`administrador/detalle/${producto.id}`} */
                  >
                    Ver Producto
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default CardReceta