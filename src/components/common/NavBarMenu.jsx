import { Container, Nav, Navbar, Image } from "react-bootstrap";
import LogoMarca from '../../assets/CookinandoBlanco-sf.png'


const NavBarMenu = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg" className="nav-estilo">
        <Container>
          <Navbar.Brand href="#home">
            <Image 
            src={LogoMarca}
            className="img-fluid"
            width={50}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                Inicio
              </Nav.Link>
              <Nav.Link href="#link">
                Administrador
                </Nav.Link>
              <Nav.Link href="#link">
                Login
                </Nav.Link>
              <Nav.Link href="#link">
                Registro
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarMenu;
