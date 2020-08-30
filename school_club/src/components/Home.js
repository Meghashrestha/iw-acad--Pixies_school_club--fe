import React from "react";
import image from '../images/background1.png';

import {Navbar, Nav} from 'react-bootstrap';
import logo from '../images/transparent-pixies-logo.png';



class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ftco-blocks-cover-1">
          
          <div className="site-section-cover overlay">
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <span className="text-cursive h2 text-red">Welcome To Pixies</span>
                  <h1 className="mb-3 font-weight-bold text-teal">The School Club</h1>
                  <p>Amazing Place for your creativity.</p>
                  <p className="mt-5"><a href="/about" className="btn btn-primary py-4 btn-custom-1">Learn More</a></p>
                </div>
                <div className="col-md-7 ml-auto align-center">
                  <img src={image} alt="Image" className="img-fluid" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="col-12 text-center">
              <span className="text-cursive h2 text-red d-block">
                Pixies: The School Club
              </span>
              <h2 className="text-white h2">OUR CLUBS</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="block-2 red">
                  <h2> All Games</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima nesciunt, mollitia, hic enim id culpa.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="block-2 yellow">
                  <h2>Exhibition</h2>
                  <p>
                    Lorem ipsum dolor sit, consectetur adipisicing elit. Minima
                    nesciunt, mollitia, hic enim id culpa.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="block-2 teal">
                  <h2>Science Clubs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima nesciunt, mollitia, hic enim id culpa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
