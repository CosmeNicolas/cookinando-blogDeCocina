import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { leerRecetasAPI } from "../../../helpers/queries";
leerRecetasAPI;
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemReceta = ({ recetas, setRecetas }) => {
  return (
    <>
      {recetas.map((receta) => (
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
              className="img-fluid img-producto-admin"
            />
          </td>
          {/* <td>{receta.preparacion}</td> */}
          <td className="d-flex py-5  justify-content-center">
            <Button variant="warning" className="me-1">
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button variant="danger">
              <FontAwesomeIcon icon={faTrash}/>
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ItemReceta;
