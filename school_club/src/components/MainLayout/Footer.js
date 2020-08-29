import React, { Component } from "react";
import "../../css/footer.css";
import facebook from "../../images/icons/001-facebook.png";
import twitter from "../../images/icons/013-twitter.png";
import linkedin from "../../images/icons/010-linkedin.png";
import insta from "../../images/icons/011-instagram.png";
import messenger from "../../images/icons/012-messenger.png";
import { Link } from 'react-router-dom'


class Footer extends Component {
  render() {
    return (


      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="footer-heading mb-2">ABOUT US</h2>
              <span className="mb-5">
                <ul className="list">
                    <li><img src={facebook} alt= "" className="social-site-icon"></img></li>
                    <li><img src={twitter} alt= "" className="social-site-icon"></img></li>
                    <li><img src={linkedin} alt= "" className="social-site-icon"></img></li>
                    <li><img src={messenger} alt= "" className="social-site-icon"></img></li>
                    <li><img src={insta} alt= "" className="social-site-icon"></img></li>

                  </ul>      
                </span>

              
            </div>
            <div className="col-lg-8 ml-auto">
              <div className="row">
                <div className="col-lg-4 ml-auto">
                  <h2 className="footer-heading mb-4">QUICK LINKS</h2>
                  <ul className="list-unstyled">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="#">About</Link></li>
                  <li><Link to="/clubs">Clubs</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/my-clubs">My Clubs</Link></li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h2 className="footer-heading mb-4">CONTACT US</h2>
                  <ul className="list-unstyled">
                   
                    <li>
                      <p>Address: kathmandu, Nepal</p>
                    </li>
                    <li>
                      <a href="/">Email : clubadmin@gmail.com</a>
                    </li>
                    <li>
                      <p>Contact: +977-9812345678</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
                  <p className="copyright-footer">
                   Copyright &copy; All rights reserved.
                  </p>
          </div>
      </div>
       
      </footer>
    );
  }
}

export default Footer;