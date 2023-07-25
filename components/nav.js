import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-black" href="/">Home</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link text-black" href="/about">About</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link text-black" href="/Products">Shop</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link text-black" href="/Contact">Contact</a>
            </li>
            <li>
              <a href='/cart'>Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;