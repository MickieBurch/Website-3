import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cartItems, setCartItems, products, selectedProducts }) => {
    const [cartItemsState, setCartItemsState] = useState([]);
  
    useEffect(() => {
      setCartItemsState(selectedProducts);
    }, [selectedProducts]);
  
    const addItemToCart = (product) => {
      // Check if the product is already in the cart
      const existingItem = cartItemsState.find((item) => item.id === product.id);
      if (existingItem) {
        // If the product is already in the cart, update the quantity
        const updatedItems = cartItemsState.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItemsState(updatedItems);
      } else {
        // If the product is not in the cart, add it as a new item
        setCartItemsState([...cartItemsState, { ...product, quantity: 1 }]);
      }
    };
  
    const removeItemFromCart = (productId) => {
        if (!cartItems || cartItems.length === 0) {
          return;
        }
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
        // Calculate the total price of all items in the cart
        const totalPrice = cartItems.reduce((total, item) => {
          const product = products.find((p) => p.id === item.id);
          if (product) {
            total += product.price * item.quantity;
          }
          return total;
        }, 0);
    
        return totalPrice.toFixed(2);
      };
    
  
 
  const containerStyle = {
    backgroundColor: '#E3C4A8',
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 cart">
          <h4 className="mb-4">Shopping Cart</h4>
          {cartItems.map((item) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) {
              return null;
            }
            return (
              <div key={item.id} className="row border-top border-bottom my-2 py-2">
                <div className="col-2">
                  <img className="img-fluid" src={product.image} alt={product.title} />
                </div>
                <div className="col">
                  <div className="text-muted">{product.category}</div>
                  <div>{product.title}</div>
                </div>
                <div className="col">
                  <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="col">&euro; {product.price.toFixed(2)}</div>
                <div className="col">
                  <button className="btn btn-link" onClick={() => removeItemFromCart(item.id)}>
                    &#10005;
                  </button>
                </div>
              </div>
            );
          })}
          <div className="back-to-shop mt-4">
            <a href="/products">
            <span className="text-muted">Back to shop</span>
            </a>
          </div>
        </div>
        <div className="col-md-4 summary">
          <h5 className="mb-4">Summary</h5>
          <hr />
          <div className="row">
        <div className="col" style={{ paddingLeft: 0 }}>
          ITEMS {cartItems.length}
        </div>
        <div className="col text-right">&euro; {calculateTotalPrice()}</div>
      </div>
          <form>
            <p>SHIPPING</p>
            <select>
              <option className="text-muted">Standard-Delivery- &euro;5.00</option>
            </select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code" />
          </form>
          <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">&euro; {calculateTotalPrice()}</div>
          </div>
          <button className="btn btn-primary mt-3" style={{ backgroundColor: "#1E3706" }}>
             CHECKOUT
             </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;