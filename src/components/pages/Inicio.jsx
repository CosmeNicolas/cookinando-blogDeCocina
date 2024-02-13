import {Container, Image} from 'react-bootstrap'
import logo from './assets/cookinando-sf-transformed.png'

const Inicio = () => {
  return (
    <>
    <Container className="main" >
      <Image src={logo} fluid />
     </Container>
     <Footer/>
    </>
  )
}

export default Inicio