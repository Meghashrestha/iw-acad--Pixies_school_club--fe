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
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Create Club</label>
          </div>
          <div className="form-group">

          <label >Club Name</label>
          <p>
            <input type="text" placeholder='Club Name' name='club_name' value={this.state.club_name} onChange={this.handleChange} ></input>
          </p>
          </div>
          <div className="form-group">
          <label >Description</label>
          <p>
            <input type="text" placeholder='Description' name='description'  value={this.state.description} onChange={this.handleChange}></input>

          </p>
          </div>
          <div className="form-group">
          <label >Club Logo</label>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          </div>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default CreateClub;