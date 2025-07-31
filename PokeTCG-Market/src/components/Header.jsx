
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Form,Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';

//import React, { useEffect, useState } from 'react';

const Header = ({ onSearch }) => {
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Envía el término de búsqueda al componente padre
  };



  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <link rel="icon" type="image/png" href="/3"/>
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
          <Nav.Link as={Link} to="/contact" className="me-3">Contact with us</Nav.Link>
          <Nav.Link as={Link} to="/search" className="me-3">Search</Nav.Link>

          <div className="d-flex align-items-center">
            <Form.Control type="text" placeholder="Buscar..." value={query} onChange={handleChange} required />
            <Button variant="outline-light" as={Link} to="/administracion" className="me-2">
              Login
            </Button>
            <Link to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {totalItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-48 start-150 translate-middle">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
