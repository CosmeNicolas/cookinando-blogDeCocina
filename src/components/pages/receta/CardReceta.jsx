import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({ receta }) => {
  return (
    <>
      <Container>
        <Row>
          {receta.map((receta) => (
            <Col key={receta.id}>
              <Card className="my-3 mx-1">
                <Card.Img
                  variant="top"
                  src={receta.imagen}
                  className="img-fluid img-card-inicio p-2"
                />
                <Card.Body>
                  <Card.Title className="title">
                    {receta.nombreReceta}
                  </Card.Title>
                  <Card.Text>Categoria: {receta.categoria}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-end">
                  <Link
                    className="btn  botonColorInicio text-light "
                    variant="dark"
                    to={`/administrador/detalle`}
                    /* to={`administrador/detalle/${producto.id}`} */
                  >
                    Ver Receta
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardReceta;
