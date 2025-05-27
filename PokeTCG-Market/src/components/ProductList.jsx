import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ types = null ,searchTerm=null}) => 
    {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


    //AND set.id:base4

  useEffect(() => 
    {
    let url = 'https://api.pokemontcg.io/v2/cards?pageSize=50&q= nationalPokedexNumbers:[1 TO 251]';
    if (types) 
    {
      
      url = `https://api.pokemontcg.io/v2/cards?pageSize=50&q= types:"${types}" AND nationalPokedexNumbers:[1 TO 251] `;
      console.log(url)
    }
    if (searchTerm) {
      url += ` AND name:"${searchTerm}"`; // Filtra por nombre
    }



//filter(card=card?.cardmarket?.prices?.averageSellPrice
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [types]);


  const handleAgregarAlCarrito = (product) => {
    alert(`${product.name} added to cart`);
  };


  if (loading) {
    return <div>Loading...</div>;
  }
  const filteredProducts = products.filter(product => 
  product.cardmarket?.prices?.averageSellPrice !== undefined
  );


  return (
    <Row>
      {filteredProducts.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />

        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
