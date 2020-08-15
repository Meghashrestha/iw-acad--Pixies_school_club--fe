import React, { Component } from 'react'
import "../css/navigation.css";
import logo from '../images/transparent-pixies-logo.png';

import { Link } from 'react-router-dom'



class Navigation extends React.Component {  



    
   



render(){
    return (
<div>
        
        <div className="site-navbar site-navbar-target" role="banner">
             
        
        <div className="container">
          <div className="menu-wrap d-flex align-items-center">
            <span className="d-inline-block d-lg-none"><a href="/" className="text-black site-menu-toggle py-2"><span className="icon-menu h3 text-black"></span></a></span>
              <nav className="site-navigation text-left mr-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu mr-auto ">
                  <img src={logo} alt="Image" className="img-fluid-logo" />
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/clubs">Clubs</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/my-clubs">My Clubs</Link></li>
                  <li><Link to="/login"><h5 className="text-red">SIGN IN</h5></Link></li>
                  
                </ul>
              </nav>
          </div>
        </div>
    </div>

    
      
  </div>   
       
       
                   
    );
}
}

export default Navigation;