import React, { Component } from 'react';
import { Tabs, Tab} from 'react-mdl'

import '../css/gallery.css'





class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state ={activeTab: 0};

    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return (
                <div><h1>This is react</h1></div>
            )
            
        }
    }
    render() {
        return(
            <div className="category-tabs" >
                <Tabs activeTab = {this.state.activeTab} onChange= {(tabId)=> this.setState({activeTab: tabId})} style={{backgroundColor:'white'}}ripple>
                    <Tab>Club 1</Tab>
                    <Tab>Club 2</Tab>
                    
                </Tabs>
            </div>
        )
    }
}

export default Gallery;