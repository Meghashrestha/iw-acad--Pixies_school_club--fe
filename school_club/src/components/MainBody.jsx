import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom'

import PanelRouter from './panelrouter'
import Panel from './Panel'
import '../css/main_body.css'
import '../css/panel.css'

class Main extends Component{
    render(){
        return(
            <div className="test">
                <div className='main-body '>
                <Panel/>
                <div className="right_main">
                    <PanelRouter />
                </div>
                </div>
            </div>
        );
    }
}

export default Main;