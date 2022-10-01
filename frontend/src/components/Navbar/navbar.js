import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles.css"

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
    
          <Navbar.Brand href="#home">
            <img
              src="https://res.cloudinary.com/dus99ir1n/image/upload/v1664634393/NASA_SpaceApps/NASA_logo_bheuqb.png"
              className="nav-logo"
              alt="NASA logo"
            />
            <Navbar.Brand>NASA SpaceApps Challenge</Navbar.Brand>
          </Navbar.Brand>
        <Container className='contenedor'>
          <Nav className="me-auto">
            <Form className="prueba d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="nav-search me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;