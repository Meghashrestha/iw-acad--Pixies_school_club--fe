import React, { useState, useEffect } from "react";
// import "../css/News.css";
import { Link, withRouter, useHistory } from "react-router-dom";

import logo from "../images/music.png";
import { getRequest, deleteRequest} from '../config/axios.config'
import { Content } from "react-mdl";

function ViewApplication() {
  const [application, setApplication] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/view-application/`);
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
       <header className="text-lg text-cursive text-red text-left mt-5">
          Applications
        </header>
      
        
          {/* {application.map(applications => { */}
            {/* return( */}
              
              <div className="card col-4">
                <div className="card-body col-12 ">
                  
               
                  
                  <div className="card-body text-sm text-sm-left col-12 ">
                    <p className="card-body text-sm text-sm-left ">
                    {/* Name : {applications.name}<br/>
                    Interested Club : {applications.club}<br/>
                    Interest Reason : {applications.middle_name}<br/>
                    Last Name: {applications.last_name}<br/>
                    Email : {applications.email}<br/> */}
                    Name : nameXYZ
                    Interested Club : nameXYZ
                    Interest Reason : nameXYZe_name
                    Last Name: nameXYZnam
                    Email : nameXYZ
                    </p>
                    
                  </div>
                  <div className="col text-center mt-1">
                      <Link to="/panel/add-members">Accept</Link>
                  </div>
                  <div className="col text-center mt-1">
                      <Link to="/panel/view-application">Reject</Link>
                  </div>
                 
  
                 
               
              </div>
            
            {/* ) */}
          {/* })} */}
         
        </div>
     
      
      
      
    </React.Fragment>
  );
}

export default ViewApplication;
