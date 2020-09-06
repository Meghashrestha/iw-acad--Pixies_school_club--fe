import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "../css/manage.css";
import { getRequest} from "../config/axios.config";

function ManagePresident(props) {
  const [president, setPresident] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
