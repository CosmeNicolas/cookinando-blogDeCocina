import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import NavBarMenu from "./components/common/NavBarMenu";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import DetalleReceta from "./components/pages/DetalleReceta";
import Error from "./components/pages/Error";
import FormularioReceta from "./components/pages/receta/FormularioReceta";
import Login from "./components/pages/Login";
import { useState } from "react";


function App() {
  const usuario = JSON.parse(sessionStorage.getItem(
    "cocinero")) || '' ;
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario)


  return (
    <>
      <BrowserRouter>
        <NavBarMenu  usuarioLogueado={usuarioLogueado}  setUsuarioLogueado={setUsuarioLogueado}/>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/administrador" element={<Administrador />} />
          <Route
            exact
            path="/administrador/crear"
            element={<FormularioReceta editar={false} titulo='Nueva Receta' />}
          />
           <Route
            exact
            path="/administrador/editar/:id"
            element={<FormularioReceta editar={true} titulo="Editar Receta" />}
          />
          <Route
          exact
          path="/administrador/detalle/:id"
          />
           <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
