import { Container, Button, Table} from "react-bootstrap"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { leerRecetasAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";



const Administrador = () => {
  const [recetas, setRecetas] = useState([])



useEffect(() => {
  traerRecetas()
}, [])



  const traerRecetas = async () =>{
    try {
      const listaRecetasAPI = await leerRecetasAPI();
      setRecetas(listaRecetasAPI)
      console.log(listaRecetasAPI)
    } catch (error) {
      console.log(error)
    }
  }


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
          <th>Categoria</th>
          <th>Ingredientes</th>
          <th>URLimg</th>
         {/*  <th>Preparacion</th> */}
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {
          recetas.map((receta)=>(
          <tr key={receta.id}>
          <td>{receta.id}</td>
          <td>{receta.nombreReceta}</td>
          <td>{receta.categoria}</td>
          <td>
            <li>{receta.ingredientes}</li>
          </td>
            
          <td>
            <img src={receta.imagen} alt="imagen-receta" className="img-fluid img-producto-admin" />
          </td>
          {/* <td>{receta.preparacion}</td> */}
          <td className='d-flex py-5  justify-content-center'>
          <Button variant="warning" className='me-1' >
            <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button variant="danger" >
            <FontAwesomeIcon icon={faTrash} className=""/>
            </Button>
          </td>
        </tr>
          ))
        }
      </tbody>
    </Table>
      </Container>
  )
}

export default Administrador