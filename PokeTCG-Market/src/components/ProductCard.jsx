import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (

    // Armo la cards
    <Card className="h-100 d-flex flex-column" border='dark'>
      <Card.Img
        variant="top"
        src={product.images.small}
        alt={product.name}
        className="card-img-top img-fluid" 
        style={{ height: '300px' , objectFit: 'scale-down' }} 
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <i>set: {product.set.name}</i>
        </Card.Text>
        <Card.Text>
        <i>rarity: {product.rarity}</i>
        </Card.Text>
        <Card.Text>
          <strong>${product.cardmarket.prices.averageSellPrice}</strong>
        </Card.Text>
        
        <Button variant="primary" onClick={() => agregarAlCarrito(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;


        //<script>if(!(product.cardmarket.prices.averageSellPrice)){
        //  product.cardmarket.prices.averageSellPrice = 'no disponible'
        //  };
        //</script>