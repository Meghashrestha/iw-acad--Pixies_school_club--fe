import React, { useState, useEffect } from "react";
import "../css/view_message.css";

import { Link, withRouter, useHistory } from "react-router-dom";

import { getRequest, deleteRequest } from "../config/axios.config";
import { Content } from "react-mdl";

function ViewMessage() {
  const [application, setApplication] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/view-message/`);
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
      <header className="text-left text-cursive text-red d-block mt-5">
        Message
      </header>

      <div className="container">
        <div className="row">
          {application.map((applications) => {
            return (
              <div className="col-lg-8 col-md-10 col-xs-12">
                <div className="card">
                  <div className="card-body d-block pb-0">
                    <div className="card-body text-sm text-sm-left ">
                      <p className="card-body text-sm text-sm-left ">
                        <div className="text-left text-cursive h2 text-red">
                          {applications.message_title}
                        </div>

                        <div className="pl-5">{applications.message}</div>
                        <div className="text-right pt-3 pb-0">
                          - {applications.sent_by} [ {applications.club} ]
                        </div>

                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ViewMessage;
