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
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error));
    }, []);
  
    const addToCart = (product) => {
      setCartItems((prevCartItems) => {
        const existingItem = prevCartItems.find((item) => item.id === product.id);
        if (existingItem) {
          // If the product is already in the cart, update the quantity
          return prevCartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // If the product is not in the cart, add it as a new item
          return [...prevCartItems, { ...product, quantity: 1 }];
        }
      });
    };
  
    useEffect(() => {

      localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const removeItemFromCart = (productId) => {
      const updatedItems = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedItems);
    };
  
    const updateItemQuantity = (productId, newQuantity) => {
      const updatedItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedItems);
    };
  
    const calculateTotalPrice = () => {
      const totalPrice = cartItems.reduce((total, item) => {
        const product = products.find((p) => p.id === item.id);
        if (product) {
          total += product.price * item.quantity;
        }
        return total;
      }, 0);
  
      return totalPrice.toFixed(2);
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
        <Route path="/products" element={<Product products={products} addToCart={addToCart} setCartItems={setCartItems} />} />
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
