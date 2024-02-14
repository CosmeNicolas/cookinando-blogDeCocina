import { Container, Button } from "react-bootstrap"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'



const Administrador = () => {
  return (
    <Container className="main">
      <div className="d-flex justify-content-around mt-3">
      <h1>
        Recetas Disponibles
      </h1>
      
    <Link to='/administrador/crear'>
    <Button variant="dark" className="botonColor mt-2">
    <FontAwesomeIcon icon={faCirclePlus} />
    </Button>
    </Link>
      </div>
      <hr/>
      </Container>
  )
}

export default Administrador