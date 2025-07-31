import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Water from './pages/Water';
import Fire from './pages/Fire';
import Login from './components/Login'; 
import Footer from './components/Footer';
import Search from './pages/Search';
import Grass from './pages/Grass';
import Lightning from './pages/Lightning';
import Psychic from './pages/Psychic';

import Carrito from './components/Carrito'; 
import CrudProductos from './components/CrudProductos';
import { CartProvider } from './components/CartContext';
import Contact from './pages/Contact';




// <Route path="/search" element={<Search />} />

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (


    <CartProvider>


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
        <Route path="/contact" element={<Contact />} />



        <Route path="/carrito" element={<Carrito />} />
        <Route path="/crud" element={<CrudProductos />} />

        
      </Routes>
      <Footer/>
    </Router>


    </CartProvider>


  );
}

export default App;
