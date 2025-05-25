import React from 'react';
import ProductList from '../components/ProductList';

const Fire = () => {
  return (
    <div className="container">
      <h1>Fire Pokemons</h1>
      <ProductList types="fire" />
    </div>
  );
};

export default Fire;
