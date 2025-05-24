import React, {  useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => 
    {
    let url = 'https://api.pokemontcg.io/v2/cards?pageSize=10';
    if (query) 
    {
      
      url = `https://api.pokemontcg.io/v2/cards?pageSize=10&q= name:"${query}"`;
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
  }, [query]);

  return (
<div className="container">
      <h1>Busqueda</h1>
      <ProductList category="Grass" />
    </div>
  );
};

export default SearchBar;
