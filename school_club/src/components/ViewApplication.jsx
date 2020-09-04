import React from 'react';
import axios from 'axios';
import { Link, withRouter, useHistory } from "react-router-dom";
import "../css/News.css";

export default class ViewApplication extends React.Component {
  state = {
    id: '',
   application: []
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://127.0.0.1:8000/delete-application/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/view-application/`)
      .then(res => {
        const application = res.data.results;
        this.setState({ application });
      })
  }

  render() {
    return (
        <React.Fragment>
        <header className="text-left text-cursive h2 text-red d-block">
          Applications
        </header>
        
        <div className="container">
          <div className="row">
            { this.state.application.map(applications => {
              return(
                <div className="col-lg-8 col-md-10 col-xs-12">
                <div className="card">
                  <div className="card-body d-block">
                    
                 
                    <h2 className="card-body text-md-left mb-0"></h2>
                    <div className="card-body text-sm text-sm-left ">
                      <p className="card-body text-sm text-sm-left ">
                      Applicant ID: {applications.id}<br/>
                      Name : {applications.name}<br/>
                      Interested Club : {applications.club_name}<br/>
                      
                      Interest Reason : {applications.interest_reason}<br/>
                      Email : {applications.email}<br/>
                      </p>
                      
                    </div>                     
             
                <form onSubmit={this.handleSubmit}>
                <div className="col text-centerb-4">
                        <Link to="/panel/add-members" className="btn btn-primary text-center mt-3 mb-4">Accept</Link>
                    </div>
                    <div className="form-group w-100 pt-3 pl-4">
                    <label>
                    Enter the id of an applicant you want to Delete: 
                        <input type="text" name="id" onChange={this.handleChange} />
                    </label>
                    </div>
                    <div className="col text-center">

                  <button type="submit" className="btn btn-primary text-center mt-3 mb-4">Delete</button>
                    </div>
                </form>
                   
    
                   
                  </div>
                </div>
              </div>
              )
            })}
           
          </div>
        </div>
        
        
        
      </React.Fragment>
    )
  }
}