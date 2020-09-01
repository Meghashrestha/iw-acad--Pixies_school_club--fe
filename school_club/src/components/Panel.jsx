import React from "react";
import { Component } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";

import { getRequest } from "../config/axios.config";
import logo from "../images/default-image.png";
import background from "../images/dashboard-background.jpg";
import "../css/panel.css";
import { useState } from "react";
import { useEffect } from "react";

function Panel() {
  const [user, setUser] = useState([])

  
  const history = useHistory()

  const logout = () => {
    localStorage.clear();
    history.push('/')
  }
  return (
    <nav id="sidebar" className="pl-0 pr-0 float-left">
      <div className="navbar-brand col-12 pl-0 pr-0 pt-0 pr-0 d-block">
        <div className="img position-relative">
          <img
            src={background}
            alt="Image"
            className="img-fluid-bg w-100 h-50 ml-0"
          />
          <div className="d-flex">
            <img
              src={logo}
              alt=""
              className="img col-8 logo rounded-circle card-img-overlay d-none d-sm-none d-md-block"
            ></img>
            <img
              src={logo}
              alt=""
              className="img-logo img-thumbnail card-img-overlay h-100 w-100 pl-0 ml-0 bg-dark d-block d-sm-block d-md-none"
            ></img>
            <p className="text-uppercase pl-5 text-xl-center text-lg-left text-md-left position-absolute d-none d-sm-none d-md-block">Abhishek Bhattarai</p>
            
          </div>
        </div>
      </div>

      <div className="navigation">
        <ul className="list-unstyled pl-0 line-height-3">
        <li className=" mr-auto text-center pt-4 pb-2 text-primary d-block d-sm-block d-md-none">
            Abhishek Bhattarai<hr/>
          </li>

          <li className="active mr-auto text-center text-red pt-5 pb-2">
            <Link to="/"> Go To Homepage</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel">Dashboard</Link>
          </li>

          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/create-club">Create Club</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/create-events">Create Events</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/create-news">Create News</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/add-staffs">Add Staffs</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/add-members">Add Members</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2" >
            <Link to="/panel/flags">
             Flags
            </Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/upload-gallery">Gallery</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/application">Application</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/news">News</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/view-application">View Application</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/events">Events</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/message">Message</Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-5 w-75 ml-xl-4 ml-lg-4 ml-md-1 ml-sm-0">
            <button className="btn btn-primary" onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Panel);
