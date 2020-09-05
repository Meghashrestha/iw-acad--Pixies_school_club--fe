import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "../css/manage.css";
import { getRequest, patchRequest } from "../config/axios.config";

function ManageMember(props) {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let history = useHistory();

  useEffect(() => {
    async function fetchMyApi() {
      setIsLoading(true);
      try {
        let response = await getRequest("/view-members/");
        console.log("members to add", response.data.results);
        setMembers(response.data.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
    fetchMyApi();
  }, []);

  return (
    <React.Fragment>
      <header className="text-left text-cursive text-red d-block mt-5">
        Members{" "}
      </header>
      <div class="container">
        <div class="row inline">
          {members.map((member) => {
            return (
              <div className="card col-2 col-xl-2 col-lg-4 col-md-8 col-sm-10">
                <div className="card-body col-12">
                  <label>Name : </label>
                  <span className="text-left text-cursive text-red ">
                    {member.user}{" "}
                  </span>
                  <br />
                  <label>Club Name : </label>
                  <span className="club"> {member.club_name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ManageMember;
