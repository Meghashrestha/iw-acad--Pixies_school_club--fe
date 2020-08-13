import React from "react";
import image from "../images/hero_1.jpg";

class Home extends React.Component {
  render() {
    return(
        <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="block-2 red">
              
              <h2> All Games</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="block-2 yellow">
              
              <h2>Exhibition</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="block-2 teal">
              
              <h2>Science Clubs</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default Home;
