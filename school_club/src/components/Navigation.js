import React, { Component } from "react";
import "../css/navigation.css";
import logo from "../images/transparent-pixies-logo.png";
import image from "../images/about.png";

import { Link } from "react-router-dom";

class Navigation extends React.Component {
  state = {
    token: localStorage.getItem("access_token"),
  };

  render() {
    return (
      <div >
        <ul className="list-unstyled px-5 bg-teal small-nav d-block d-block d-sm-none">
        
          <spam className="text-cursive tex-red bg-aqua col-12 mb-3">PIXIES</spam>
          
          <li className="pt-3">
                    <Link to="/">
                      Home
                    </Link>
                  </li><hr/>
                  <li >
                    <Link to="/about">About</Link>
                  </li><hr/>
                  <li>
                    <Link to="/clubs">Clubs</Link>
                  </li><hr/>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li><hr/>
                  {this.state.token && (
                    <li className="text-cursive">
                      <Link to="/panel">Panel</Link>
                    </li>
                  )}
                  {!this.state.token && (
                    <li>
                      <Link to="/login">
                        <p className="text-red">
                          SIGN IN
                        </p>
                      </Link>
                    </li>)}
          </ul>
        <div className="site-navbar site-navbar-target d-none d-sm-block pb-5" role="banner">
          
          <div className="container col-xl-10 col-lg-10 col-md-11 col-sm-12">
            <div className="menu-wrap navbar-expand-md d-xl-flex d-lg-flex d-md-flex d-sm-flex  align-items-center">
              <nav
                className="site-navigation text-left mr-auto d-lg-block "
                role="navigation"
              >
                <ul className="site-menu main-menu mr-auto d-none d-sm-block">
                  <img src={logo} alt="Image" className="img-fluid-logo" />
                  <li>
                    <Link to="/" className=" active ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/clubs">Clubs</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  {this.state.token && (
                    <li>
                      <Link to="/panel">
                      <p className="text-red text-xl-right  text-lg-right  text-md-right">
                          Panel
                        </p>
                      </Link>
                    </li>
                  )}
                  {!this.state.token && (
                    <li>
                      <Link to="/login">
                        <p className="text-red text-xl-right  text-lg-right  text-md-right">
                          SIGN IN
                        </p>
                      </Link>
                    </li>
                  )}
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
