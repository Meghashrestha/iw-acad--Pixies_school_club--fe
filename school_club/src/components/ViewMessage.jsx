import React, { useState, useEffect } from "react";
import "../css/News.css";
import { Link, withRouter, useHistory } from "react-router-dom";

import logo from "../images/music.png";
import { getRequest, deleteRequest} from '../config/axios.config'
import { Content } from "react-mdl";

function ViewMessage() {
  const [application, setApplication] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/view-message/`);
        console.log(response.data)
        setApplication(response.data.results)
        setIsLoading(false)
      } catch (err) {
        console.log(err);
        setIsLoading(false)
      }
    }
    fetchMyApi();
  }, []);


  return (
    <React.Fragment>
      <header className="text-left text-cursive h2 text-red d-block">
        Message
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
                    Message Title : {applications.message_title}<br/>
                    Message : {applications.message}<br/>
                    Club: {applications.club}<br/>
                 
                    </p>
                    
                  </div>
                
                 
  
                 
                </div>
              </div>
            </div>
            )
          })}
         
        </div>
      </div>
      
      
      
    </React.Fragment>
  );
}

export default ViewMessage;
