import React from "react";
import {Link} from "react-router-dom";

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
              <span className="text-cursive h5 text-red text-center">
                About Us
              </span>
              <h3 className="text-black">Bring Fun Life To You.</h3>
              <p>
                <span>
                Student activities are an integral part of the school program.
Generally approved by the principal and under the direct supervision of the staff, 
activities are contributed to the educational objectives of the school.
                </span>
                <span>
                We offer a wide variety of clubs and activities for students. 
For more information about joining an activities or starting a new club,<Link to="/clubs"><span className="text-red">Become a member</span></Link>.
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
