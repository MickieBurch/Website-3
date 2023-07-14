import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/WB3-BGIMG.jpg';

const Homepage = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        <div className="col-sm-5 d-none d-md-block">
          <img src={backgroundImage} alt="Left Image" className="img-fluid" style={{ maxWidth: '200vh', marginLeft:'20%' }} />
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ marginLeft: '0%' }}>
          <div className='text-center text-wrap p-3'>
            <h1>Organic Fashion</h1>
            <p className='text-center text-wrap p-4' style={{ maxWidth: '100%', margin: '0 auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta laoreet enim, sit amet cursus neque vulputate ac. Fusce sem ante, mollis vitae mollis eu, cursus at elit. Integer lobortis et diam a sodales. Quisque semper purus leo, sed convallis turpis mollis quis..
            </p>
            <button className="btn-primary rounded-pill" style={{ width: '20%', backgroundColor: '#1E3706' }}>
              <a className='text-decoration-none text-white' href='/Products'>Shop Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
