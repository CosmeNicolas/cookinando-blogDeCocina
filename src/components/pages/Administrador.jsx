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

  const borrarReceta = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const respuesta = await borrarReceta(id);
          if (respuesta.status === 200) {
            const productosActualizados = await leerRecetasAPI()
            setProductos(productosActualizados)
            traerRecetas();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

          } else {
            console.log("Error al borrar la receta:", respuesta.status);
            // Puedes manejar otros códigos de estado aquí si es necesario
          }
        } catch (error) {
          console.log("Error en la solicitud DELETE:", error);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
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
