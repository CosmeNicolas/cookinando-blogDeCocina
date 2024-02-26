import { Container, Image, Spinner } from "react-bootstrap";
import banner from "../../assets/Cookinando-banner.png";
import CardReceta from "./receta/CardReceta";
import { leerRecetasAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import libroReceta from "../../assets/libroReceta32p.png";

const Inicio = () => {
  const [receta, setReceta] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    mostraRecetaInicio();
  }, []);

  const mostraRecetaInicio = async () => {
    try {
      const respuesta = await leerRecetasAPI();
      if(respuesta.status === 200){
        const recetasAPI = await respuesta.json()
        setReceta(recetasAPI);
      }else{
        Swal.fire({
          title: "Ocurrio un error en el servidor",
          text: "Intente realizar esta accion en unos minutos",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error en el servidor",
        text: "Intente realizar esta acción en unos minutos",
        icon: "error",
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <section className="main">
        <div className="contenedor-imgInicip">
          <Image src={banner} className="w-100 imagen-banner" fluid />
        </div>
        <Container>
          <h1 className="text-center mt-3 titulo-inicio">
            Nuestras Recetas{" "}
            <span>
              <img src={libroReceta} alt="logo-receta" />
            </span>
          </h1>
          <hr />
          {cargando ? (
            <div className="d-flex justify-content-center mt-2 ">
              <Spinner
                className="py-2 cargando"
                animation="border"
                role="status"
              >
                <span className="visually-hidden text-dark">
                  Cargando Receta...
                </span>
              </Spinner>
            </div>
          ) : (
            <CardReceta receta={receta} />
          )}
        </Container>
      </section>
    </>
  );
};

export default Inicio;
