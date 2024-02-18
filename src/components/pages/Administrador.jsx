import { Container, Button, Table} from "react-bootstrap"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';




const Administrador = () => {
  return (
    <Container className="main">
      <div className="d-flex justify-content-around mt-3">
      <h1 className="titulo-inicio">
        Recetas Disponibles
      </h1>
      
    <Link to='/administrador/crear'>
    <Button variant="dark" className="botonColorCrear mt-2">
    <FontAwesomeIcon icon={faCirclePlus}  />
    </Button>
    </Link>
      </div>
      <hr/>
      {/* Tabla */}
      <Table responsive striped bordered hover variant='dark' size='sm' >
      <thead>
        <tr>
          <th>Cod</th>
          <th>Nombre Receta</th>
          <th>Ingredientes</th>
          <th>URLimg</th>
          <th>Categoría</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
          <tr>
          <td>1</td>
          <td>Nombre Receta</td>
          <td>ingredientes</td>
          <td>📝</td>
          <td>Categoria</td>
          <td className='d-flex py-5  justify-content-center'>
          <Button variant="warning" className='me-1' >
            <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button variant="danger" >
            <FontAwesomeIcon icon={faTrash} className=""/>
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
      </Container>
  )
}

export default Administrador