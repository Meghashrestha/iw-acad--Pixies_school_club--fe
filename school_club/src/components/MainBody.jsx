import React from 'react';
import {Component} from 'react';

import '../css/main_body.css'
import '../css/panel.css'
import PanelRouter from './panelrouter'
import Panel from './Panel'

class Main extends Component{
    render(){
        return(
            <div className="test">
                <div className='main-body container-fluid pl-0 '>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-2 px-0"><Panel/></div>
                
                <div className="right_main col-xl-10 col-lg-10 col-md-10 col-sm-8 col-10 ">
                    <PanelRouter />
                </div>
                </div>
            </div>
        );
    }
}

export default Main;