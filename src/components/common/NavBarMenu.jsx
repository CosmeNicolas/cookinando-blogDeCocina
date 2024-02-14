import { Container, Nav, Navbar, Image } from "react-bootstrap";
import LogoMarca from '../../assets/CookinandoBlanco-sf.png'
import {Link, NavLink} from 'react-router-dom'


const NavBarMenu = () => {
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
              <NavLink className="nav-link" to='/administrador'>
                Administrador
                </NavLink>
              <NavLink className="nav-link" to='/login' href="#link">
                Login
                </NavLink>
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
