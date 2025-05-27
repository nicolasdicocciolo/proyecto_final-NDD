
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

//import React, { useEffect, useState } from 'react';

const Header = ({ onSearch }) => {

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Envía el término de búsqueda al componente padre
  };



  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>       
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://images.pokemontcg.io/base1/symbol.png" 
            alt="Logo"
            className="d-inline-block align-top me-2"
            width='200px'
          />
          <span></span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Todas las cartas</Nav.Link>
          <Nav.Link as={Link} to="/water" className="me-3">Water</Nav.Link>
          <Nav.Link as={Link} to="/fire" className="me-3">Fire</Nav.Link>
          <Nav.Link as={Link} to="/grass" className="me-3">Grass</Nav.Link>
          <Nav.Link as={Link} to="/lightning" className="me-3">Lightning</Nav.Link>
          <Nav.Link as={Link} to="/psychic" className="me-3">Psychic</Nav.Link>
          <Nav.Link as={Link} to="/search" className="me-3">Search</Nav.Link>

          <div className="d-flex align-items-center">
            <Form.Control type="text" placeholder="Buscar..." value={query} onChange={handleChange} required />
            <Button variant="outline-light" as={Link} to="/administracion" className="me-2">
              Login
            </Button>
            <Link to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
