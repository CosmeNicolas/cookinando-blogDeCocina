import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import NavBarMenu from "./components/common/NavBarMenu";
import Inicio from "./components/pages/Inicio";
import DetalleReceta from "./components/pages/DetalleReceta";
import Error from "./components/pages/Error";
import Login from "./components/pages/Login";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("cocinero")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <NavBarMenu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
        <Routes>
          <Route exact path="/" element={<Inicio />} />

          <Route
            exact
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdmin />
              </RutasProtegidas>
            }
          />

          <Route
            exact
            path="/administrador/detalle/:id"
            element={<DetalleReceta />}
          />
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
