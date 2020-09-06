import React from "react";
import image from "../images/background1.png";
import "../css/home.css";

import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/transparent-pixies-logo.png";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ftco-blocks-cover-1">
          <div className="site-section-cover overlay">
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 col-sm-8 col-xs-12 mt-5 pt-5">
                  <span className="text-cursive text-black h2">
                    Welcome To Pixies
                  </span>
                  <h1 className="mb-3 font-weight-bold text-teal">
                    The School Club
                  </h1>
                  <p>Amazing Place for your creativity.</p>
                  <p className="mt-5">
                    <a href="/about" className="btn py-4 btn-danger text-black">
                      Learn More
                    </a>
                  </p>
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
              <h2 className="text-black h2 pb-3">OUR CLUBS</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-md-2 mb-sm-2 mb-2">
                <div className="block-2 red">
                  <h2> All Games</h2>
                  <p>
                  How do you keep your kids busy on a rainy day? Card games, energetic activities, indoor games,
                   thinking games and outdoor activities - we have them all!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-md-2 mb-sm-2 mb-2">
                <div className="block-2 yellow">
                  <h2>Exhibition</h2>
                  <p>
                    Providing opportunities that helps student delineate what they are capable of. We organize various exhibitions that helps explore ideas and knowledge.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-md-2 mb-sm-2 mb-2">
                <div className="block-2 teal">
                  <h2>Science Clubs</h2>
                  <p>
                  We facilitate a series of development workshops that involve participation of science teachers, young science enthusiasts
                  and scientists.
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
