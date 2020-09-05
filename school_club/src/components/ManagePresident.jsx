import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "../css/manage.css";

import { getRequest, patchRequest } from "../config/axios.config";

function ManagePresident(props) {
  const [president, setPresident] = useState([]);
  const [isPresident, setIsPresident] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState();

  let history = useHistory();

  useEffect(() => {
    async function fetchMyApi() {
      setIsLoading(true);
      try {
        let response = await getRequest("/view-staff/");
        console.log("members to add", response.data.results);
        setPresident(response.data.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
    fetchMyApi();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    async function patchtMyApi() {
      try {
        let response = await patchRequest(
          `/info/view-profile/${isPresident.member}`,
          {
            is_staff: status,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
    patchtMyApi();
  };

  const handleChangeI = (event) => {
    const copy2 = Object.assign({}, isPresident);
    const e = event.currentTarget;
    copy2[e.name] = e.value;
    setIsPresident(copy2);
  };

  const toggleStatus = (event) => {
    setStatus((value) => !value);
    console.log(event.target.checked);
  };

  console.log(isPresident.isPresident);
  console.log(president);
  return (
    <React.Fragment>
      <header className="text-left text-cursive text-red d-block mt-5">
        Presidents
      </header>
      <div class="container">
        <div class="row inline">
          {president.map((presidents) => {
            return (
              <div className="card col-2 col-xl-2 col-lg-4 col-md-8 col-sm-10">
                <div className="card-body col-12">
                  <label>Name : </label>
                  <span className="text-left text-cursive text-red ">
                    {presidents.user}{" "}
                  </span>
                  <br />
                  <label>Club Name : </label>
                  <span className="club"> {presidents.club_name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ManagePresident;
