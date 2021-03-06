import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import image from "../images/about.png";

import "../css/Club.css";
import { getRequest } from "../config/axios.config";
import { setDesp } from "../actions/message";

function Clubs(props) {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  useEffect(() => {
    async function fetchMyApi() {
      setIsLoading(true);
      try {
        let response = await getRequest("/view-club/");
        setClubs(response.data.results);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    }
    fetchMyApi();
  }, []);

  const handleClick = (description) => {
    props.setDesp(description);
    return history.push("/clubs/description/");
  };

  return (
    <React.Fragment>
      <div class="site-section-club ">
        <div class="container col-12 position-relative">
          <div className=" image-fluid pb-5 position-absolute ">
            <img src={image} alt="Image" className="img-fluid" />
          </div>
          <div class="row mb-5">
            <div class="col-12 text-center">
              <span class="text-cursive h2 text-red d-block">Pixies</span>
              <h2 class="text-white h2">OUR CLUBS</h2>
            </div>
          </div>
          <div class="row">
            {clubs.map((club) => {
              return (
                <div class="col-lg-3 mb-4 ml-5 mb-lg-0 center">
                  <div class="package text-center bg-white mb-4">
                    <span class="img-wrap">
                      <img src={club.logo} alt="Image" class="img-fluid" />
                    </span>
                    <h3 class="text-teal">{club.club_name}</h3>
                    <div className="col-8 text-left">
                      <p
                        onClick={() => handleClick(club.description)}
                        class="btn btn-warning  btn-custom-1 mt-2"
                      >
                        Learn More
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setDesp: (user) => dispatch(setDesp(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(Clubs));
