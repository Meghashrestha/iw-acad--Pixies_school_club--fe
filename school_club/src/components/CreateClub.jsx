import React, { Component } from "react";
import Forms from "./Forms";

import { postRequest } from "../config/axios.config";
import "../css/CreateClub.css";


export default class CreateClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club_name: "",
      description: "",
      logo: "",
    };
  }

  handleSubmit = async (event) => {
    const { club_name, description, logo } = this.state;
    try {
      let response = await postRequest("/club/", {
        user: {
          club_name: club_name,
          description: description,
          logo: logo,
        },
      });
    } catch (err) {
      console.log(err);
    }

    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { club_name, description, logo } = this.state;
    return (
      <React.Fragment>
        <header className="text-cursive text-red d-block">Create Club</header>
        <section className="section-form">
          <form className="create-form" onSubmit={this.handleSubmit}>
            <div className="wrap-input">
              <span className="label-input">Club Name</span>
              <input
              
                type="text"
                name="club_name"
                value={club_name}
                placeholder="Club Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="wrap-input">
              <span className="label-input">Description: </span>
              <input
             
                type="text"
                name="description"
                value={description}
                placeholder="Description"
                onChange={this.handleChange}
              />
            </div>
            <div className="logo-div">
              <span className="label-input">Logo: </span>
              <input
                className="logo-input"
                type="file"
                name="club_name"
                value={logo}
                onChange={this.handleChange}
              />
            </div>

            <div class="form-btn-class">
              <button class="form-btn" type="submit" >Create</button>
             
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}
