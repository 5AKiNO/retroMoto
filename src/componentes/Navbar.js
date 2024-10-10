import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">1ero LASI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#proceso">Proceso</Nav.Link>
            <Nav.Link href="#fundamentos">Fundamentos</Nav.Link>
            <NavDropdown title="Mas" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/KatheBohnert/Documentacion.git">Documentacion</NavDropdown.Item>
              <NavDropdown.Item href="#video">
              Video
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Imagenes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#obj">
                Modelo 3D
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
