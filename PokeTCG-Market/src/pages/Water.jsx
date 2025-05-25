import React from 'react';
import ProductList from '../components/ProductList';

const Water = () => {
  return (
    <div className="container">
      <h1>Water Pokemons</h1>
      <ProductList types="Water" />
    </div>
  );
};

export default Water;
