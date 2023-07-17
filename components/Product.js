import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [visibleProductsCount, setVisibleProductsCount] = useState(6);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const loadMoreProducts = () => {
    setVisibleProductsCount((prevCount) => prevCount + 6);
  };

  const handleTextOverflow = (event) => {
    const element = event.target;
    element.classList.toggle('truncate');
  };

  const addToCart = (product) => {
    // Implement your logic to add the product to the cart
    console.log('Product added to cart:', product);
  };

  return (
    <div className="container">
      <div className="container text-center my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="">Online Shop</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="row p-4">
        {products.slice(0, visibleProductsCount).map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100">
              <img className="card-img-top" src={product.image} alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text overflow-hidden truncate">{product.description}</p>
                <p>${product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProductsCount < products.length && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={loadMoreProducts}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Product;
