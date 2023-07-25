import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Homepage from './components/homepage';
import About from './components/About'
import Product from './components/Product';
import Contact from './components/Contact'
import { Cart } from './components/cart';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
