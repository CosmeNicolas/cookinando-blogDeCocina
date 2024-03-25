import { Route, Routes} from "react-router-dom"
import Administrador from '../pages/Administrador'
import FormularioReceta from "../pages/receta/FormularioReceta";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />} />
        <Route
          exact
          path="/crear"
          element={<FormularioReceta editar={false} titulo="Nueva Receta" />}
        />
        <Route
          exact
          path="/editar/:id"
          element={<FormularioReceta editar={true} titulo="Editar Receta" />}
        />
      </Routes>
    </>
  );
};

export default RutasAdmin