import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/transparent-pixies-logo.png';
import '../css/panel.css';
import '../css/main_body.css';
// import Sidebar from './sidebar';


class Panel extends Component{
    render(){
        return(
            <div className='side-bar'>
                <div className='display-pic'><img src={logo} className='dp'></img><br></br>
                    <span>NAME</span>
                    </div>
                <ul>
                    <li className='nav-branch'><Link to="/panel/create-club">Create Club</Link></li>
                    <li className='nav-branch'><Link to="/panel/create-news">Create News</Link></li>
                    <li className='nav-branch'><Link to="/panel/create-events">Create Events</Link></li>
                    <li className='nav-branch'><Link to="/panel/application">Application</Link></li>
                    <li className='nav-branch'><Link to="/panel/news">News</Link></li>
                    <li className='nav-branch'><Link to="/panel/events">Events</Link></li>
                    <li className='nav-branch'><Link to="/panel/gallery">Gallery</Link></li>
                    <li className='nav-branch'><Link to="/panel/message">Message</Link></li>
                    <li className='nav-branch'><Link to="/panel/logout">Logout</Link></li>
                </ul>
            </div>
        ); 
    }
}

export default Panel