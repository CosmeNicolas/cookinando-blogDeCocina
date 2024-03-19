import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ItemReceta from "./receta/ItemReceta";
import { leerRecetasAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    traerRecetas();
  }, []);

  const traerRecetas = async () => {
    try {
      const respuesta = await leerRecetasAPI();
      if(respuesta.status === 200){
        const listaRecetasAPI = await respuesta;
        setRecetas(listaRecetasAPI);
      }
      const listaRecetasAPI = await respuesta;
      setRecetas(listaRecetasAPI);
      
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error en el servidor",
        text: "Intente realizar esta accion en unos minutos",
        icon: "error",
      });
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
          <tr>
            <th>Cod</th>
            <th>Nombre Receta</th>
            <th>Categoria</th>
            <th>Ingredientes</th>
            <th>Imagen</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta) => (
            <ItemReceta
              key={receta._id}
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
