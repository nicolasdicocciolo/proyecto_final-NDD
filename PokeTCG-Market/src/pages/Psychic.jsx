import React from 'react';
import ProductList from '../components/ProductList';

const Psychic = () => {
  return (
    <div className="container">
      <h1>Psychic Pokemons</h1>
      <ProductList types="psychic" />
    </div>
  );
};

export default Psychic;