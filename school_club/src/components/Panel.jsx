import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";

import logo from "../images/default-image.png";
import background from "../images/dashboard-background.jpg";
import "../css/panel.css";
import { useState } from "react";

function Panel() {


  const [user, setUser] = useState([])

  
  const history = useHistory()

  const logout = () => {
    localStorage.clear();
    history.push('/login')
  }
  
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
      </div>

      <div className="navigation">
        <ul className="list-unstyled pl-0 line-height-3">
        <li className=" mr-auto text-center pt-4 pb-2 text-primary d-block d-sm-block d-md-none">
            Abhishek Bhattarai<hr/>
          </li>

          <li className="active mr-auto text-center text-black pt-5 pb-2">
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

          <li>
            <Link to="/panel/add-president">
             Add President
            </Link>
          </li>
          <li className="nav-item  mr-auto text-center pt-2 pb-2">
            <Link to="/panel/add-members">Add Members</Link>
          </li>

          <li>
            <Link to="/panel/flags">
             Flags
            </Link>
          </li>
          <li>
            <Link to="/panel/application">
              Application <span className="badge bg-danger">10</span>
            </Link> 
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
          <li>

            <Link to="/panel/upload-gallery">
              Upload Gallery <span className="badge bg-danger">10</span>
            </Link> 
          </li>
          <li>
            <Link to="/panel/logout">
              Logout
            </Link>

            <button onClick={logout}>Logout</button>


          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Panel);
