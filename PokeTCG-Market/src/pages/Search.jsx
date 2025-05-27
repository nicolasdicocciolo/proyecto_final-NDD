import React from 'react';
import ProductList from '../components/ProductList';

const Search = ({searchTerm}) => {
  return (
    <div className="container">
      <h1>Buscar</h1>
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default Search;