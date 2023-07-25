import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ selectedProducts }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Set the initial cart items based on selectedProducts prop
    setCartItems(selectedProducts);
  }, [selectedProducts]);

  useEffect(() => {
    // Use another useEffect for additional API calls (add, update, and delete) with appropriate dependency arrays
    const addItemToCart = (product) => {
      // Check if the product is already in the cart
      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If the product is already in the cart, update the quantity
        const updatedItems = cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
      } else {
        // If the product is not in the cart, add it as a new item
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    };

    // Function to remove an item from the cart
    const removeItemFromCart = (productId) => {
      const updatedItems = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedItems);
    };

    // Function to update the quantity of an item in the cart
    const updateItemQuantity = (productId, newQuantity) => {
      const updatedItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedItems);
    };

    const containerStyle = {
      backgroundColor: '#E3C4A8',
    };

    return (
      <div>
        <section className="h-100 h-custom" style={containerStyle}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                            <h6 className="mb-0 text-muted">{cartItems.length} items</h6>
                          </div>
                          <hr className="my-4" />

                          {cartItems.map((item) => (
                            <div key={item.id} className="row mb-4 d-flex justify-content-between align-items-center">
                              {/* ... */}
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  className="btn btn-link px-2"
                                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <input
                                  id={`form${item.id}`}
                                  min="0"
                                  name="quantity"
                                  value={item.quantity}
                                  type="number"
                                  className="form-control form-control-sm"
                                  onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                                />

                                <button
                                  className="btn btn-link px-2"
                                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              {/* ... */}
                            </div>
                          ))}
                          {/* End of mapping */}

                          <hr className="my-4" />

                          <div className="pt-5">
                            <h6 className="mb-0">
                              <a href="/" className="text-body">
                                <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 bg-grey">
                        <div className="p-5">
                          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                          <hr className="my-4" />
                          {/* Summary section and other JSX */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
};

export default Cart;
