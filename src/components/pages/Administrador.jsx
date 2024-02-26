import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ItemReceta from "./receta/ItemReceta";
import { leerRecetasAPI } from "../../helpers/queries";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    traerRecetas();
  }, []);

  const traerRecetas = async () => {
    try {
      const listaRecetasAPI = await leerRecetasAPI();
      setRecetas(listaRecetasAPI);
      console.log(listaRecetasAPI);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="main">
      <div className="d-flex justify-content-around mt-3">
        <h1 className="titulo-inicio mt-2">Recetas Disponibles</h1>
        <Link to="/administrador/crear">
          <Button variant="dark" className="botonColorCrear mt-sm-3">
            <FontAwesomeIcon icon={faCirclePlus} />
          </Button>
        </Link>
      </div>
      <hr />
      {/* Tabla */}
      <Table responsive striped bordered hover variant="danger" size="sm">
        <thead>
          <tr >
            <th>Cod</th>
            <th>Nombre Receta</th>
            <th>Categoria</th>
            <th>Ingredientes</th>
            <th>Imagen</th>
            <th className="h-100">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta) => (
            <ItemReceta
              key={receta.id}
              receta={receta}
              setRecetas={setRecetas}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
