import React from 'react';
import Cart from './cart';

const CartPage = ({ cartItems }) => { // <-- Make sure the prop name is cartItems
  return (
    <div>
      <h1>Cart Page</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
