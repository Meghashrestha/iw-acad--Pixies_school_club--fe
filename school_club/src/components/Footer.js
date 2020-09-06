import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/footer.css";
import facebook from "../images/icons/001-facebook.png";
import twitter from "../images/icons/013-twitter.png";
import linkedin from "../images/icons/010-linkedin.png";
import insta from "../images/icons/011-instagram.png";
import messenger from "../images/icons/012-messenger.png";


class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small">
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="about text-xl-left text-lg-left text-md-left text-sm-center text-center col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
              <h5 className="text-xl-left text-lg-left text-md-left text-sm-center ml-xl-5 ml-lg-2 ml-md-1 ml-sm-0">ABOUT US</h5>

              <ul className="list list-group-horizontal-sm ">
                <li>
                  <img
                    src={facebook}
                    alt=""
                    id="facebook"
                    className="img social-site-icon"
                  ></img>
                </li>
                <li>
                  <img
                    src={twitter}
                    alt=""
                    className=" social-site-icon"
                  ></img>
                </li>
                <li>
                  <img src={linkedin} alt="" className="social-site-icon "></img>
                </li>
                <li>
                  <img
                    src={messenger}
                    alt=""
                    className="social-site-icon"
                  ></img>
                </li>
                <li>
                  <img src={insta} alt="" className="social-site-icon"></img>
                </li>
              </ul>
            </div>
            <div className="quick  text-xl-left text-lg-left text-md-left text-sm-center col-xl-3 col-lg-3 col-md-2 col-sm-12 pl-0">
              <h5 className="text-uppercase text-xl-left text-lg-left text-md-left text-sm-center ">QUICK LINKS</h5>
              <ul className="list-unstyled text-xl-left">
                <li>
                  <Link className="text-black" to="/">Home</Link>
                </li>
                <li>
                  <Link className="text-black " to="/about">About</Link>
                </li>
                <li>
                  <Link className="text-black" to="/clubs">Clubs</Link>
                </li>
                <li>
                  <Link className="text-black" to="/gallery">Gallery</Link>
                </li>
               
              </ul>
            </div>
            <div className="contact col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-lg-left text-xl-left text-md-left text-sm-center md-3 mb-0 mb-3">
              <h5 className="text-uppercase">CONTACT US</h5>
              <ul className="list-unstyled text-lg-left text-xl-left text-md-left text-sm-center ">
                <li>
                  <p className="text-black">Address: kathmandu, Nepal</p>
                </li>
                <li>
                  <p className="text-black">Email : clubadmin@gmail.com</p>
                </li>
                <li>
                  <p className="text-black">Contact: +977-9812345678</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-black mb-0 pb-5">Copyright &copy; All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;
