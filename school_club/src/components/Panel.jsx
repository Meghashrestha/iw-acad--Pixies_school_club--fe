import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import {getRequest} from '../config/axios.config'
import logo from "../images/default-image.png";
import background from "../images/dashboard-background.jpg";
import "../css/panel.css";
import { useState } from "react";
import { useEffect } from "react";

// import Sidebar from './sidebar';

function Panel() {

  const [user, setUser] = useState([])
  
  // useEffect(() => {
  //   async function fetchMyApi() {
  //       try{
  //           let response = await getRequest('/view-staff/')
  //           console.log(response)
  //           setUser(response.data.results)
  //       }
  //       catch(err){
  //           console.log(err)
  //       }
  //   }
  //   fetchMyApi()
        
  //       }, [])

    return (
     
      <nav id="sidebar">
        <div className="custom-menu">
          <div className="img bg-wrap text-center py-4">
            <img src={user.club_name} alt="Image" className="img-fluid-all" />
            <div className="user-logo">
              <img src={logo} alt="Image" className="img-rounded img-logo-fluid" />
              <h3>Abhishek Bhattarai</h3>


            </div>
          </div>
        </div>

        <ul className="list-unstyled components mb-5">
        <li className="active">
            <Link to="/"> Go To Homepage</Link>
          </li>

          <li >
            <Link to="/panel/create-club">Create Club</Link>
          </li>
          <li>
            <Link to="/panel/create-events">
              Create Events
            </Link>
          </li>
          <li>
            <Link to="/panel/create-news">
              Create News
            </Link>
          </li>
          <li>
            <Link to="/panel/add-staffs">
             Add Staffs
            </Link>
          </li>
          <li>
            <Link to="/panel/add-members">
             Add Members
            </Link>
          </li>
         
          <li>
            <Link to="/panel/application">
              Application <span className="badge bg-danger">10</span>
            </Link> 
          </li>
          <li>
            <Link to="/panel/news">
             
              News
            </Link>
          </li>
          <li>
            <Link to="/panel/view-application">
              View Application <span className="badge bg-danger">10</span>
            </Link> 
          </li>
          <li>
            <Link to="/panel/events">
              Events
            </Link>
          </li>
          <li>
            <Link to="/panel/message">
              Message <span className="badge bg-danger">10</span>
            </Link>
          </li>
          <li>
            <Link to="/panel/logout">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
     
    );
  }

export default Panel;
