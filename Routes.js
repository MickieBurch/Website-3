import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Homepage from './components/homepage';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import CartPage from './components/CartPage';

const AppRoutes = ({ cartItems }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Pass the cartItems prop to the CartPage component */}
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
