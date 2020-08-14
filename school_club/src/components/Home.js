import React from "react";

import News from "./News";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="site-section">
          <div className="container">
            <div class="col-12 text-center">
              <span class="text-cursive h2 text-red d-block">
                Pixies: The School Club
              </span>
              <h2 class="text-white h2">OUR CLUBS</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="block-2 red">
                  <h2> All Games</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima nesciunt, mollitia, hic enim id culpa.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="block-2 yellow">
                  <h2>Exhibition</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima nesciunt, mollitia, hic enim id culpa.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="block-2 teal">
                  <h2>Science Clubs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima nesciunt, mollitia, hic enim id culpa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <News/>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
