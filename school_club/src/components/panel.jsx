import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/transparent-pixies-logo.png';
import '../css/panel.css';
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
                    <li className='nav-branch'><Link to="/create-news">Create News</Link></li>
                    <li className='nav-branch'><Link to="/create-events">Create Events</Link></li>
                    <li className='nav-branch'><Link to="/application">Application</Link></li>
                    <li className='nav-branch'><Link to="/news">News</Link></li>
                    <li className='nav-branch'><Link to="/events">Events</Link></li>
                    <li className='nav-branch'><Link to="/gallery">Gallery</Link></li>
                    <li className='nav-branch'><Link to="/message">Message</Link></li>
                    <li className='nav-branch'><Link to="/logout">Logout</Link></li>
                    </ul>
            </div>
        ); 
    }
}

export default Panel