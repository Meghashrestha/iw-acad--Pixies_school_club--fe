import React, { Component } from 'react'
import "../css/navigation.css";
import logo from '../images/transparent-pixies-logo.png';
import image from '../images/hero_1.jpg';

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
                  <li><Link to="/login"><h6 className="text-red">Be a Member</h6></Link></li>
                  
                </ul>
              </nav>
          </div>
        </div>
    </div>
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
    
      
  </div>   
       
       
                   
    );
}
}

export default Navigation;