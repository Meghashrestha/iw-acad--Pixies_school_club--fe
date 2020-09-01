import React, { Component } from "react";
import "../css/navigation.css";
import logo from "../images/transparent-pixies-logo.png";

import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="site-navbar site-navbar-target" role="banner">
         
          <div className="container col-xl-10 col-lg-10 col-md-11 col-sm-12 ">
            
            <div className="menu-wrap navbar-expand-md d-xl-flex d-lg-flex d-md-flex d-sm-flex  align-items-center">
              <nav
                className="site-navigation text-left mr-auto d-lg-block "
                role="navigation"
              >
                <ul className="site-menu main-menu mr-auto">
                  <img src={logo} alt="Image" className="img-fluid-logo" />
                  <li>
                    <Link  to="/" className=" active ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/clubs" >Clubs</Link>
                  </li>
                  <li>
                    <Link to="/gallery" >Gallery</Link>
                  </li>

                  <li>
                    <Link to="/panel" >Panel</Link>
                  </li>
                  <li>
                    <Link to="/login" >
                      <p className="text-red text-xl-right  text-lg-right  text-md-right">
                        SIGN IN
                      </p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Navigation;
