import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Product from './components/Product';
import Cart from './components/cart';
import Homepage from './components/homepage';
import About from './components/About';
import Contact from './components/Contact';


const App = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]); // Define selectedProducts state
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error));
    }, []);
  
  
    
    const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
        console.log('Product added to cart:', product);
      };

  return (
    <Router>
      <React.StrictMode>
        <Nav />
        <Routes>
          <Route path='/'
          element={<Homepage />}>
          </Route>
          <Route path='/About'
          element={<About />}>
          </Route>
          <Route path='/Contact'
          element={<Contact />}>
          </Route>
          <Route path="/products" element={<Product products={products} addToCart={addToCart} />} />
          <Route
  path="/cart"
  element={<Cart cartItems={cartItems} setCartItems={setCartItems} products={products} />}
/>
        </Routes>
      </React.StrictMode>
    </Router>
  );
};

export default App;
