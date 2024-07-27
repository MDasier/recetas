import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample(props) {

    const handleSearch = (event) => {
        props.setSearchValue(event.target.value)
    }

  return (
    <Navbar expand="sm" className="bg-body-tertiary " variant="dark">
      <Container>
        <Navbar.Brand><h1 className='titulo'>Las Recetas de Marina</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav.Link className='titulo' href="https://www.instagram.com/left.nutrition/" target="_blank">@left.nutrition 📷</Nav.Link>
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
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;