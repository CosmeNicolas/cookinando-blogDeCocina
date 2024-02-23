import { Container, Image } from "react-bootstrap";
import banner from "../../assets/Cookinando-banner.png";
import CardReceta from "./receta/CardReceta";

const Inicio = () => {

  


  return (
    <>
      <section className="main">
        <div className="contenedor-imgInicip">
          <Image src={banner} className="w-100" fluid />
        </div>
        <Container>
          <h1 className="text-center mt-3 titulo-inicio">Nuestras Recetas</h1>
          <hr />
          <CardReceta/>
        </Container>
      </section>
    </>
  );
};

export default Inicio;
