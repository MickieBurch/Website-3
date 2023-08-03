import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Product = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [visibleProductsCount, setVisibleProductsCount] = useState(6);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const loadMoreProducts = () => {
    setVisibleProductsCount((prevCount) => prevCount + 6);
  };

  const handleTextOverflow = (event) => {
    const element = event.target;
    element.classList.toggle('truncate');
  };

  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    if (!cartItems || cartItems.length === 0) {
      // If cartItems is empty, add the product with quantity 1
      setCartItems([{ ...product, quantity: 1 }]);
    } else {
      // Check if the product is already in the cart
      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If the product is already in the cart, update the quantity
        const updatedItems = cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
      } else {
        // If the product is not in the cart, add it as a new item with quantity 1
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    }
  };

  const categories = ["men's clothing", 'jewelery'];

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories((prevCategories) => [...prevCategories, value]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((category) => category !== value)
      );
    }
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length === 0) {
      return true; // Show all products if no category is selected
    }
    return selectedCategories.includes(product.category);
  });

  return (
    <div className="container">
      <div className="container text-center my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="">Online Shop</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div>
        <label className="form-label small">Filter by Category:</label>
        {categories.map((category) => (
          <div className="form-check" key={category}>
            <input
              className="form-check-input"
              type="checkbox"
              value={category}
              id={`categoryCheckbox-${category}`}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
            />
            <label className="form-check-label" htmlFor={`categoryCheckbox-${category}`}>
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="row p-4">
        {filteredProducts.slice(0, visibleProductsCount).map((product) => (
            <div className="col-md-4" key={product.id}>
            <div className="card h-100">
              <img className="card-img-top" src={product.image} alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text overflow-hidden truncate">{product.description}</p>
                <p>${product.price}</p>
                <button className="btn btn-primary" onClick={addToCartHandler}>
                  Add to Cart
                </button>
            </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProductsCount < products.length && (
        <div className="text-center">
          <button className="btn btn-primary" style={{ backgroundColor: "#1E3706" }} onClick={loadMoreProducts}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Product;
