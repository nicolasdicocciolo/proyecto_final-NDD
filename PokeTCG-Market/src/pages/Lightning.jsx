import React from 'react';
import ProductList from '../components/ProductList';

const Lightning = () => {
  return (
    <div className="container">
      <h1>Lightning Pokemons</h1>
      <ProductList types="lightning" />
    </div>
  );
};

export default Lightning;
