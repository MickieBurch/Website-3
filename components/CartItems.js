import React, { useState } from 'react';

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Cart</h5>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              {/* Additional cart item details */}
              {/* ... */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartItems;

