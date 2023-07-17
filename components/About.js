
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockAbout from '../assets/Stock-about.jpg';


const About = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        <div className="col-sm-5 d-none d-md-block">
          <img src={StockAbout} alt="Left Image" className="img-fluid" style={{ maxWidth: '100vh', marginLeft: '50%' }} />
        </div>
        <div className="col-md-7 d-flex align-items-center justify-content-center">
          <div className='text-center text-md m-2 p-5'>
        <p>CEO</p>
          <h1 className="mb-4" >Mickie Burch</h1>

            <div className="d-flex flex-column align-items-center">
            <p className='text-left font-weight-bold text-wrap mb-4' style={{ maxWidth: '50%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className='text-left text-wrap mb-4' style={{ maxWidth: '50%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
