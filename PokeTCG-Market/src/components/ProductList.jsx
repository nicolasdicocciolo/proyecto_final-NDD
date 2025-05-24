import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = null }) => 
    {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("")

  useEffect(() => 
    {
    let url = 'https://api.pokemontcg.io/v2/cards?pageSize=10';
    if (category) 
    {
      
      url = `https://api.pokemontcg.io/v2/cards?pageSize=10&q= types:"${category}"`;
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
  }, [category]);

  const handleAgregarAlCarrito = (product) => {
    alert(`Producto ${product.title} agregado al carrito`);
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
