import React from 'react';
import ProductList from '../components/ProductList';

const Search = () => {
  return (
    <div className="container">
      <h1>Buscar</h1>
      <ProductList busqueda="Stage 1" />
    </div>
  );
};

export default Search;