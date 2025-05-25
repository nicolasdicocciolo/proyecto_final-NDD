import React from 'react';
import ProductList from '../components/ProductList';

const Grass = () => {
  return (
    <div className="container">
      <h1>Grass Pokemons</h1>
      <ProductList types="Grass" />
    </div>
  );
};

export default Grass;
