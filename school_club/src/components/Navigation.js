import React from 'react'
import '../css/navigation.css' 
import logo from '../images/transparent-pixies-logo.png';
import image from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';



function Navbar() {
    return <nav className="header">
        <div className="signin-register">
        <Link to="/sign-in" style={{ textDecoration: 'none' }}><span id="btn" class="noselect">Register</span><spam id="circle"></spam></Link>
        <Link to="/sign-in" style={{ textDecoration: 'none' }}><span id="btn" class="noselect">Sign In</span><spam id="circle"></spam></Link>
        </div>
        
        <div className="main-image">
        <img className="main-subclass-image" src={image} alt= "" /> 
        </div>;
        <Link to="/"><img className="header_logo" src={logo} alt= "" /></Link>
        <div className="navbar-item-container">
        
        <div className="nav-items">
            
            <Link to="/about" style={{ textDecoration: 'none' , paddingLeft: '35px'}}>About</Link>
            <Link to="/clubs" style={{ textDecoration: 'none' , paddingLeft: '35px'}}>Clubs</Link>
            <Link to="/gallery" style={{ textDecoration: 'none' , paddingLeft: '35px'}}>Gallery</Link>
            <Link to="/my-club" style={{ textDecoration: 'none' , paddingLeft: '35px'}}>My Clubs</Link>
            
            
        </div>
        </div>
    </nav>;




    
    
}

export default Navbar;
