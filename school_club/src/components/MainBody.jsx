import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom'

import PanelRouter from './panelrouter'
import Panel from './Panel'
import '../css/main_body.css'

class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='main-body'>
                <Panel/>
                <PanelRouter />
                </div>
            </React.Fragment>
        );
    }
}

export default Main;