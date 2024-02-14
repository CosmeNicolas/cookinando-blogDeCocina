import { Image, Button } from "react-bootstrap"
import relaxFood from '../../assets/relax.png'
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
    <section className="main my-2">
      <div className="text-center d-flex align-items-center justify-content-center flex-column">
    <Image src={relaxFood} fluid className="mt-2 " />
    <h1>Pagina no Encontrada</h1>
    <p className="display-6" ><strong>Decidimos descansar</strong></p>
    <Button className="botonColor" variant="dark" as={Link} to='/'>
    Volver al Inicio
    </Button>
      </div>
    </section>
    </>
  )
}

export default Error