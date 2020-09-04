import React from "react";
import "../css/about.css";

import image from "../images/about.png";

class About extends React.Component {
  render() {
    return (
      <div className="site-section">
        
        <div className="container col-12 position-relative">
        <div className=" image-fluid pb-5 position-absolute ">
        <img src={image} alt="Image" className="img-fluid" />
        </div>
          <div className="row ">
           <div className="col-4"></div>
            <div className="col-md-4 text-center mt-5">
            
              <span className="text-cursive h5 text-red text-center">About Us</span>
              <h3 className="text-black">Bring Fun Life To You.</h3>
              <p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  harum, magni sequi nostrum maxime enim.
                </span>
                <span>
                  Magnam id atque dicta deleniti, ipsam ipsum distinctio.
                  Facilis praesentium voluptatem accusamus, earum veritatis,
                  laudantium.
                </span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default About;
