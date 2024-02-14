import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/common/Footer'
import NavBarMenu from './components/common/NavBarMenu';
import Inicio from './components/pages/Inicio'
import Administrador from './components/pages/Administrador'
import DetalleReceta from './components/pages/DetalleReceta'
import Error from './components/pages/Error'
import FormularioReceta from './components/pages/FormularioReceta'



function App() {
 

  return (
    <>
    <BrowserRouter>
    <NavBarMenu/>
    <Routes>
     <Route exact path='/' element={<Inicio/>} />
     <Route exact path='/administrador' element={<Administrador/>} />
     <Route exact path='/administrador/crear' element={<FormularioReceta/>} />
     <Route
     exact   
     path='/administrador/detalle'
     element={<DetalleReceta/>}
      />
     <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
