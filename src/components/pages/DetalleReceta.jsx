import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerRecetaAPI } from "../../helpers/queries";
import chef from '../../assets/cocina64.png'

const DetalleReceta = () => {
  const { id } = useParams();
  const [detalle, setDetalle] = useState({});

  useEffect(() => {
    mostrarDetalle();
  }, []);

  const mostrarDetalle = async () => {
    const respuesta = await obtenerRecetaAPI(id);
    console.log(respuesta);
    if (respuesta.status === 200) {
      const detalle = await respuesta.json();
      console.log(detalle);
      setDetalle(detalle);
    }
  };

  return (
    <>
      <h1 className="text-center titulo-inicio mt-2 pt-3">
        Detalle de la receta <span><img  src={chef} alt="logo-chef" /></span>
      </h1>
      <div className="container-fluid">
      </div>
              <hr />
      <section className=" main mt-3 ">
        <Container className="p-lg-5" fluid>
          <div className="d-flex flex-column container-fluid  justify-content-evenly align-content-center contenedor-detalle contenedor-img-detalle">
              <h2 className="display-6 mt-2 text-md-center text-sm-center ">
                {detalle.nombreReceta}
              </h2>
            <img
              className=" rounded-2 my-3 img-fluid img-detalle "
              src={detalle.imagen}
              alt="receta-cafeteria"
            />
            <div className="ms-2 w-100">

              <ul className="list-unstyled p-lg-5">
                <li>
                  <strong className="color">Categoria: </strong>
                  {detalle.categoria}
                </li>
                <p>
                  <strong className="color">Toma Nota 📝</strong>
                </p>
                <div className="container-fluid">
                  <hr />
                </div>
                <li>
                  Ingrediente 1:
                  {detalle.ingrediente1}
                </li>
                <li>Ingrediente 2:{detalle.ingrediente2}</li>
                <li>Ingrediente 3: {detalle.ingrediente3} </li>
                <li>Ingrediente 4: {detalle.ingrediente4} </li>
                <li>Ingrediente 5: {detalle.ingrediente5} </li>
              </ul>
              {/* preparacion */}
              <div className="container-fluid">
                <hr />
              </div>
              <p className="container-fluid">
                <strong>Preparación:</strong>
                {detalle.preparacion}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DetalleReceta;
