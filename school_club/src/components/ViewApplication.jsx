import React, { useState, useEffect } from "react";
// import "../css/News.css";
import { Link, withRouter, useHistory } from "react-router-dom";

import logo from "../images/music.png";
import { getRequest, deleteRequest } from "../config/axios.config";
import { Content } from "react-mdl";

function ViewApplication() {
  const [application, setApplication] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/view-application/`);
        console.log(response.data);
        setApplication(response.data.results);
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
      <header className="text-lg text-cursive text-red text-left mt-5">
        Applications
      </header>
      
      <div className="container">
        <div className="row">
          {application.map(applications => {
            return(
              <div className="col-lg-8 col-md-10 col-xs-12">
              <div className="card">
                <div className="card-body d-block">
                  
               
                  <h2 className="card-body text-md-left mb-0"></h2>
                  <div className="card-body text-sm text-sm-left ">
                    <p className="card-body text-sm text-sm-left ">
                    Name : {applications.name}<br/>
                    Interested Club : {applications.club_name}<br/>
                    Interest Reason : {applications.interest_reason}<br/>
                    Email : {applications.email}<br/>
                    </p>
                    
                  </div>
                  <div className="col text-center mt-1">
                      <Link to="/panel/add-members">Accept</Link>
                  </div>
                  <div className="col text-center mt-1">
                      <Link to="/panel/view-application">Reject</Link>
                  </div>
                 
  
                 
                </div>
              </div>
            </div>
            )
          })}
         
        </div>

        {/* ) */}
        {/* })} */}
      </div>
    </React.Fragment>
  );
}

export default ViewApplication;
