import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ types = null }) => 
    {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => 
    {
    let url = 'https://api.pokemontcg.io/v2/cards?pageSize=50&q= nationalPokedexNumbers:[1 TO 151] set.id:base4';
    if (types) 
    {
      
      url = `https://api.pokemontcg.io/v2/cards?pageSize=50&q= types:"${types}" nationalPokedexNumbers:[1 TO 151] set.id:base4`;
      console.log(url)
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

  return (
    <Row>
      {products.map((product=product?.cardmarket?.prices?.averageSellPrice) => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />

        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
