import React from 'react'
import '../css/navigation.css' 
import logo from '../images/transparent-pixies-logo.png';
import { Link } from 'react-router-dom';


function Navigation() {
    return <nav className="header">
        <Link to="/"><img className="header_logo" src={logo} alt= "" /></Link>
        <div className="nav-items">
            
            <Link to="/about" style={{ textDecoration: 'none' , paddingLeft: '35px'}}>About</Link>
            <Link to="/clubs" style={{ textDecoration: 'none' , paddingLeft: '35px'}}>Clubs</Link>
            <Link to="/gallery" style={{ textDecoration: 'none' , paddingLeft: '35px'}}>Gallery</Link>
            <Link to="/my-club" style={{ textDecoration: 'none' , paddingLeft: '35px'}}>My Club</Link>
            <Link to="/sign-in" style={{ textDecoration: 'none' , paddingLeft: '45px'}}><span id="btn" class="noselect">Sign In</span><spam id="circle"></spam></Link>
            
        </div>
        
       
    </nav>;
    
}

export default Navigation;
