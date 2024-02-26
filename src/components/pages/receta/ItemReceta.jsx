import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { leerRecetasAPI, eliminarRecetaAPI } from "../../../helpers/queries";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const ItemReceta = ({ receta, setRecetas }) => {
  const eliminarReceta = async () => {
    Swal.fire({
      title: "Deseas eliminar la receta?",
      text: "No puedes revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarRecetaAPI(receta.id);
        if (respuesta.status === 200) {
          //actualizar la tabla
          const recetasActualizadas = await leerRecetasAPI();
          setRecetas(recetasActualizadas);
          Swal.fire({
            title: "Receta Eliminada!",
            text: `Tu receta "${receta.nombreReceta}" fue eliminada`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <>
      <tr key={receta.id}>
        <td>{receta.id}</td>
        <td>{receta.nombreReceta}</td>
        <td>{receta.categoria}</td>
        <td>
          <ul>
            <li>{receta.ingrediente1}</li>
            <li>{receta.ingrediente2}</li>
            <li>{receta.ingrediente3}</li>
            <li>{receta.ingrediente4}</li>
            <li>{receta.ingrediente5}</li>
          </ul>
        </td>
        <td>
          <img
            src={receta.imagen}
            alt="imagen-receta"
            className="img-receta-admin"
          />
        </td>
        <td className="py-5 ">
          <div className="d-flex justify-content-center  align-items-center flex-md-column flex-column">
          <Button variant="warning" className="py-1  my-1">
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
          <Button onClick={eliminarReceta} variant="danger" className="py-1 my-1">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ItemReceta;
