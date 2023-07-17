import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/Fashion.png';


const Homepage = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        <div className="col-sm-5 d-none d-md-block">
          <img src={backgroundImage} alt="Left Image" className="img-fluid" style={{ maxWidth: '200vh', marginLeft: '50%' }} />
        </div>
        <div className="col-md-7 d-flex align-items-center justify-content-center">
          <div className='text-center text-md m-2 p-5'>
          <h1 className="mb-4" style={{letterSpacing: '0.1em' }}>Organic Fashion</h1>
            <div className="d-flex flex-column align-items-center">
              <p className='text-left text-wrap mb-4' style={{ maxWidth: '50%' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta laoreet enim, sit amet cursus neque vulputate ac. Fusce sem ante, mollis vitae mollis eu, cursus at elit. Integer lobortis et diam a sodales. Quisque semper purus leo, sed convallis turpis mollis quis..
              </p>
              <button className="btn btn-primary rounded-pill" style={{ width: '20%', backgroundColor: '#1E3706' }}>
                <a className='text-decoration-none text-white' href='/Products'>Shop Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
