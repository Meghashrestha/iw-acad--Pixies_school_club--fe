import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import science from "../images/description/science.png";
import { connect } from "react-redux";
import { getRequest } from "../config/axios.config";
import BackArrow from "./back-arrow";

function Club_description(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function fetchMyApi() {
      try {
        let response = await getRequest("/view-club/");
        setName(response.data.club_name);
        setDescription(response.data.description);
        // setName(response.data.results[0].club_name);
        // setDescription(response.data.results[0].description);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMyApi();
  }, []);

  return (
    <React.Fragment>
      <BackArrow />
      <div class="site-wrap" id="home-section">
        <div class="site-section">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <img src={science} alt="Image" class="img-fluid" />
              </div>
              <div class="col-md-5 ml-auto pl-md-5">
                <span class="text-cursive h5 text-red">About our club</span>
                <p>
                  <span>{props.description}</span>
                </p>

                <span class="text-cursive h5 text-red">INTERESTED?</span>

                <p class="mt-5">
                  <Link
                    to="/panel/application"
                    class="btn btn-warning py-4 btn-custom-1"
                  >
                    Become a Member
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  description: state.auth.description,
});

export default connect(mapStateToProps, null)(withRouter(Club_description));
