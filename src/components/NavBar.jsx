import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { CardWidget } from "./CartWidget"
export const NavBar = () => (
    <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Metal Zone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/instrumentos">Instrumentos</Nav.Link>
            <Nav.Link as={Link} to="/accesorios">Accesorios</Nav.Link>
          </Nav>
          <CardWidget/>
        </Container>
      </Navbar>
)