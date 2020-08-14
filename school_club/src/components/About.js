import React from "react";

import image from "../images/hero_1.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={image} alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-5 ml-auto pl-md-5">
              <span className="text-cursive h5 text-red">About Us</span>
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
