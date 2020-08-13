import React, { Component } from 'react';
import logo from '../images/pixies-logo.jpg';







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
            <div className="site-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <span className="text-cursive h5 text-red d-block">Our Gallery</span>
                  <h2 className="text-black">School Clubs events</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-4">
                  <img src={logo} alt="Image" className="img-fluid"/>
                </div>
                <div className="col-md-3 mb-4">
                  <img src={logo} alt="Image" className="img-fluid"/>
                </div>
                <div className="col-md-3 mb-4">
                  <img src={logo} alt="Image" className="img-fluid"/>
                </div>
                <div className="col-md-3 mb-4">
                  <img src={logo} alt="Image" className="img-fluid"/>
                </div>
                <div className="col-md-3 mb-4">
                  <img src={logo} alt="Image" className="img-fluid"/>
                </div>
                <div className="col-md-3 mb-4">
                  <img src={logo} alt="Image" className="img-fluid"/>
                </div>
                <div className="col-md-3 mb-4">
                  <img src={logo} alt="Image" className="img-fluid"/>
                </div>
                <div className="col-md-3 mb-4">
                  <img src={logo} alt="Image" className="img-fluid"/>
                </div>
                
               
              </div>
            </div>
          </div>
        )
    }
}

export default Gallery;