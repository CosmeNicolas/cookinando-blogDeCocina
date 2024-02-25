import { Container, Image } from "react-bootstrap";
import banner from "../../assets/Cookinando-banner.png";
import CardReceta from "./receta/CardReceta";
import { leerRecetasAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";

const Inicio = () => {

  const [receta, setReceta] = useState([])

  useEffect(() => {
    mostraRecetaInicio()
  }, [])
  

  const mostraRecetaInicio = async()=>{
    try {
      const recetasAPI = await  leerRecetasAPI()
      setReceta(recetasAPI)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className="main">
        <div className="contenedor-imgInicip">
          <Image src={banner} className="w-100" fluid />
        </div>
        <Container>
          <h1 className="text-center mt-3 titulo-inicio">Nuestras Recetas</h1>
          <hr />
          <CardReceta receta={receta} setReceta={setReceta} />
        </Container>
      </section>
    </>
  );
};

export default Inicio;
