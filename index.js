import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './Routes'
import Nav from './components/nav'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Routes />
  </React.StrictMode>
);

