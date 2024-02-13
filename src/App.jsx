import {Container, Image} from 'react-bootstrap'
import Footer from './components/common/Footer'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/cookinando-sf-transformed.png'


function App() {
 

  return (
    <>
     <Container className="main" >
      <Image src={logo} fluid />
     </Container>
     <Footer/>
    </>
  )
}

export default App
