import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  const total = carrito.reduce((acc, item) => acc + Number(item.price) * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Your cart is empty</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3>Shopping Cart</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${Number(item.cardmarket.prices.averageSellPrice).toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(Number(item.cardmarket.prices.averageSellPrice) * item.cantidad).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="text-end">Total to pay: ${total.toFixed(2)}</h5>
    </Container>
  );
};

export default Carrito;