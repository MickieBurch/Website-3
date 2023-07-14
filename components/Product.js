import React from 'react';
import Oat from '../assets/oat.jpg'
import French from '../assets/french.jpg'
import Lavender from '../assets/Lavender.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Product = () => {
  return (
    <div className="container">
    <div className="container text-center my-5">
    <div className="row justify-content-center">
    <div className="col-12 col-md-8">
      <h1 className="">Online Shop</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    </div>
    </div>
      <div className="row p-4">
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={Oat} alt="Card image cap" style={{ height: '25vh' }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">$Price here</li>
              <li className="list-group-item">In stock</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={French} alt="Card image cap" style={{ height: '25vh' }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">$Price here</li>
              <li className="list-group-item">In stock</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={Lavender} alt="Card image cap" style={{ height: '25vh' }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">$Price here</li>
              <li className="list-group-item">In stock</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;