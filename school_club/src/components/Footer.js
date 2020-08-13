import React, { Component } from "react";
// import "../css/footer.css";
// import facebook from "../images/icons/001-facebook.png";
// import twitter from "../images/icons/013-twitter.png";
// import linkedin from "../images/icons/010-linkedin.png";
// import insta from "../images/icons/011-instagram.png";
// import messenger from "../images/icons/012-messenger.png";

class Footer extends Component {
  render() {
    return (
      // <div className="footer-container">
      //             <div className="row">
      //                 <div className="column">
      //                     <ul className="list">
      //                         <li><img src={facebook} alt= ""></img></li>
      //                         <li><img src={twitter} alt= ""></img></li>
      //                         <li><img src={linkedin} alt= ""></img></li>
      //                         <li><img src={messenger} alt= ""></img></li>
      //                         <li><img src={insta} alt= ""></img></li>

      //                     </ul>
      //                 </div>
      //                 <div className="column">
      //                     <ol className="list" >
      //                         <text>
      //                             <li>Address: New Baneshwor, Kathmandu</li>
      //                             <li>Email:meghashrestha30@gmail.com </li>
      //                             <li>Contact: +977-9812345678</li>
      //                         </text>
      //                     </ol>
      //                 </div>
      //             </div>
      // </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="footer-heading mb-3">About Us</h2>
              <p className="mb-5">
                A platform to explore your creativity and have fun.{" "}
              </p>

              
            </div>
            <div className="col-lg-8 ml-auto">
              <div className="row">
                <div className="col-lg-4 ml-auto">
                  <h2 className="footer-heading mb-4">Navigation</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Testimonials</a>
                    </li>
                    <li>
                      <a href="/">Terms of Service</a>
                    </li>
                    <li>
                      <a href="/">Privacy</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h2 className="footer-heading mb-4">Navigation</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Testimonials</a>
                    </li>
                    <li>
                      <a href="/">Terms of Service</a>
                    </li>
                    <li>
                      <a href="/">Privacy</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                <p>
                   Copyright &copy; All rights reserved.
                </p>
              </div>
            </div>
          </div></div>
       
      </footer>
    );
  }
}

export default Footer;
