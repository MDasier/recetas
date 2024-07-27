import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample(props) {

    const handleSearch = (event) => {
        props.setSearchValue(event.target.value)
    }

  return (
    <Navbar expand="sm" className="bg-body-tertiary search-bar" variant="dark">
      <Container>
        <Navbar.Brand href="#">Las Recetas de Marina</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="https://www.instagram.com/left.nutrition/" target="_blank">@left.nutrition 📷</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca receta, ingrediente..."
              className="me-2"
              aria-label="Search" 
              value={props.searchValue} 
              onChange={handleSearch}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;