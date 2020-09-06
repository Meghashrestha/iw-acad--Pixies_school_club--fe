import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import "../css/application.css";
import { getRequest, postRequest } from "../config/axios.config";

function Application(props) {
  const [application, setApplication] = useState({
    name: "",
    interest_reason: "",
    email: "",
    club_name: "",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await getRequest("/view-club/");
        console.log(response.data.results);
        setData(response.data.results);
        console.log("test", data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMyAPI();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    async function postMyApi() {
      try {
        let response = await postRequest("member-application/", {
          name: props.name,
          interest_reason: application.interest_reason,
          email: props.email,
          club_name: application.club_name,
        }
        )
        alert('Successfully sent application ')


        console.log(application.name);
      } catch (err) {
        console.log(err);
      }
    }

    postMyApi();
  };

  const handleChange = (event) => {
    const copy = Object.assign({}, application);
    const e = event.currentTarget;
    copy[e.name] = e.value;
    setApplication(copy);
    console.log(application.club_name);
  };

  return (
    <React.Fragment>
      <header className="text-left text-cursive text-red d-block mt-5">
        Be a Member
      </header>
      <form onSubmit={handleSubmit} className="col-7 px-2 py-3">
        <div className="form-group col-12 d-flex">
          <label className="pr-3 col-3">Select Club</label>
          <select
            name="club_name"
            className="form-control col-6"
            value={application.club_name}
            onChange={handleChange}
          >
            <option value="" key="">
              Select Club
            </option>
            {data.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.club_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-12">
          <label className="pr-3 pl-3">
            Why are you interested to join this club?
          </label>
          <textarea
            type="text"
            className="form-control ml-3"
            name="interest_reason"
            value={application.interest_reason}
            placeholder="Write a note"
            onChange={handleChange}
          />
        </div>

        <button
          className="btn btn-warning pl-3 pr-3 col-4 mt-3 ml-4 mb-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  name: state.auth.first_name,
  email: state.auth.email,
});

export default connect(mapStateToProps, null)(withRouter(Application));
