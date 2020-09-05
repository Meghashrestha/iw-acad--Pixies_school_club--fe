import React, { Component } from 'react';
import axios from 'axios';

class CreateClub extends Component {

  state = {
    club_name: '',
    description: '',
    logo: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      logo: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('logo', this.state.logo, this.state.logo.name);
    form_data.append('club_name', this.state.club_name);
    form_data.append('description', this.state.description);
    let url = 'http://127.0.0.1:8000/add-club/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
          alert("Successfully created club")
        })
        .catch(err => console.log(err))
  };

  render() {
    return (

      <React.Fragment>
        <header className="text-left text-cursive text-red d-block mt-5">Create Club</header>
        <form onSubmit={this.handleSubmit} className="col-12 col-lg-8 col-md-12 col-sm-12 ml-lg-4 ml-md-2 ml-sm-1 ml-0 pl-4 pt-3 pb-3">
        
          <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12">

          <label >Club Name</label>
         
            <input type="text" placeholder='Club Name' name='club_name' value={this.state.club_name} onChange={this.handleChange} ></input>
          
          </div>
          <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12">
          <label >Description</label>
          
            <input type="text" placeholder='Description' name='description'  value={this.state.description} onChange={this.handleChange}></input>

          
          </div>
          <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12">
          <label >Club Logo</label>
          
            <input type="file"
                   id="image"
                   className="logo-club border-bottom-0"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          
          </div>
          <button className="btn btn-info col-3 mb-3 mt-3 ml-3" type="submit">Create</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateClub;