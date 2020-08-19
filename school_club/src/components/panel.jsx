import React from 'react';
import {Component} from 'react';

import logo from '../images/transparent-pixies-logo.png';
import '../css/panel.css'
// import Sidebar from './sidebar';


class Panel extends Component{
    render(){
        return(
            <div className='side-bar'>
                <div className='display-pic'><img src={logo} className='dp'></img><br></br>
                <span>NAME</span>
                </div>
                <div className='nav-branch'>Create Club</div>
                <div className='nav-branch'>Create News</div>
                <div className='nav-branch'>Create Events</div>
                <div className='nav-branch'>Application</div>
                <div className='nav-branch'>News</div>
                <div className='nav-branch'>Events</div>
                <div className='nav-branch'>Gallery</div>
                <div className='nav-branch'>Message</div>
                <div className='nav-branch'>Logout</div>
            </div>
        ); 
    }
}

export default Panel