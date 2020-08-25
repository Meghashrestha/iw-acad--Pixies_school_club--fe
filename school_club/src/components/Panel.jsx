import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/default-image.png";
import background from "../images/dashboard-background.jpg";
import "../css/panel.css";

// import Sidebar from './sidebar';

class Panel extends Component {
  render() {
    return (
      // <div className='side-bar'>

      //     <ul>
      //         <li className='nav-branch'><Link to="/panel/create-club">Create Club</Link></li>
      //         <li className='nav-branch'><Link to="/panel/create-news">Create News</Link></li>
      //         <li className='nav-branch'><Link to="/panel/create-events">Create Events</Link></li>
      //         <li className='nav-branch'><Link to="/panel/application">Application</Link></li>
      //         <li className='nav-branch'><Link to="/panel/news">News</Link></li>
      //         <li className='nav-branch'><Link to="/panel/events">Events</Link></li>
      //         <li className='nav-branch'><Link to="/panel/gallery">Gallery</Link></li>
      //         <li className='nav-branch'><Link to="/panel/message">Message</Link></li>
      //         <li className='nav-branch'><Link to="/panel/logout">Logout</Link></li>
      //     </ul>
      // </div>
      <nav id="sidebar">
        <div className="custom-menu">
          <div className="img bg-wrap text-center py-4">
            <img src={background} alt="Image" className="img-fluid-all" />
            <div className="user-logo">
              <img src={logo} alt="Image" className="img-logo-fluid" />
              <h3>Catriona Henderson</h3>
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
            <Link to="/panel/create-news">
              Create News
            </Link>
          </li>
          <li>
            <Link to="/panel/create-events">
             Create Events
            </Link>
          </li>
          <li>
            <Link to="/panel/application">
              Application
            </Link>
          </li>
          <li>
            <Link to="/panel/news">
             
              News
            </Link>
          </li>
          <li>
            <Link to="/panel/events">
              Events
            </Link>
          </li>
          <li>
            <Link to="/panel/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/panel/message">
              Message
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
}

export default Panel;
