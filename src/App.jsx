/* import {Container, Image} from 'react-bootstrap'
import Footer from './components/common/Footer' */
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/common/Footer'
import NavBarMenu from 
'./components/common/NavBarMenu';
import Inicio from './components/pages/Inicio'



function App() {
 

  return (
    <>
    <BrowserRouter>
    <NavBarMenu/>
    <Routes>
     <Route exact path='/' element={<Inicio/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
