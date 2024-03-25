import { Container, Nav, Navbar, Image } from "react-bootstrap";
import LogoMarca from '../../assets/CookinandoBlanco-sf.png'
import {Link, NavLink, useNavigate} from 'react-router-dom'


const NavBarMenu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("inicioRollingCoffee");
    setUsuarioLogueado("");
    navegacion("/");
  };
  return (
    <>
      <Navbar variant="dark" expand="lg" className="nav-estilo">
        <Container>
          <Navbar.Brand as={Link} to='/' href="/" >
            <Image 
            src={LogoMarca}
            className="img-fluid"
            width={50}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/" href="#home">
                Inicio
              </NavLink>
              {usuarioLogueado.length > 0 ? (
                <>
                  <NavLink className="nav-link" to="/administrador">
                    Adminsitrador
                  </NavLink>
                  <Link className="nav-link" variant="link" onClick={logout}>
                    LogOut
                  </Link>
                </>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
              <NavLink className="nav-link" to='error' href="#link">
                Registro
                </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarMenu;
