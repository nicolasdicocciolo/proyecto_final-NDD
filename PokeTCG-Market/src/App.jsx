import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Water from './pages/Water';
import Fire from './pages/Fire';
import Login from './components/Login'; 
import Footer from './components/Footer';
import Search from './pages/Search';
import Grass from './pages/Grass'
import Lightning from './pages/Lightning'
import Psychic from './pages/Psychic'
import SearchBar from './components/SearchBar'
import ProductList from "./components/ProductList";


// <Route path="/search" element={<Search />} />

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Header onSearch={setSearchTerm}/>
      <Routes>

        <Route path="/administracion" element={<Login />} />
        <Route path="/search" element={<Search searchTerm={searchTerm} />} />
        <Route path="/" element={<Home />} />
        <Route path="/water" element={<Water />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/grass" element={<Grass />} />
        <Route path="/lightning" element={<Lightning />} />
        <Route path="/psychic" element={<Psychic />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
