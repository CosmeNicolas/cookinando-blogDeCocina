import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
/* import Swal from "sweetalert2";  */
import { obtenerRecetaAPI } from "../../helpers/queries";

const DetalleReceta = () => {
  const {id} = useParams()
  const [detalle, setdetalle] = useState({})

 useEffect(() => {
    mostrarDetalle()
 }, [])
 

  const mostrarDetalle = async () =>{
   const mostrarReceta = await obtenerRecetaAPI(id)
   console.log(mostrarReceta)
   if (mostrarReceta.status === 200) {
    const detalle = await mostrarReceta
    console.log(detalle)
    setdetalle(detalle)
   }
  }

  return (
    <>
      <h1 className="text-center">Detalle de la receta </h1>
      <div className="container-fluid">
        <hr />
      </div>
      <section className=" main mt-3 ">
      
        <article className="p-lg-5">
          <div className="d-flex container-fluid  justify-content-evenly align-content-center contenedor-detalle contenedor-img-detalle">
            <img
              className=" rounded-2 my-3 img-fluid img-detalle "
              src={detalle.imagen} 
             
              alt="receta-cafeteria"
            />
            <div className="ms-2">
              <h2 className="display-6 mt-2 text-md-center text-sm-center ">
               receta
              </h2>
              <hr />
              <p className="p-lg-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, alias? Veniam, at cum. Quos fugiat aperiam rem ratione aspernatur sed deserunt ullam sequi. Nemo, beatae odit. Architecto numquam enim similique!</p>
              <ul className="list-unstyled p-lg-5">
                <li>
                  <strong className="color">Categoria:</strong>{" "}
                 dulces
                </li>
                <li>
                  <strong className="color">Precio:</strong> $100
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetalleReceta;

