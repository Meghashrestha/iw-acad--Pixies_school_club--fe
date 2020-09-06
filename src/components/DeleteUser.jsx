import React from "react";

import "../css/News.css";
import {getRequest, deleteRequest} from '../config/axios.config'

export default class DeleteUser extends React.Component {
  state = {
    id: "",
    profiles: [],
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    async function delMyAPI() {
      try {
        let response = await deleteRequest(`info/view-profile/${this.state.id}`);
        alert("Successfully deleted");
      } 
      catch (err) {
        console.log(err);
      }
    }
    delMyAPI();
    }

  async componentDidMount() {
    try {
      let response = await getRequest(`info/view-profile/`);
      const profiles = response.data.results;
      this.setState({ profiles });
    } 
    catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="col-3 mb-4" onSubmit={this.handleSubmit}>
          <label className="text-left text-red">
            Delete User ID:
            <div className="form-group w-100 pt-0">
              <input type="text" name="id" onChange={this.handleChange} />
            </div>
            <div className="col text-center">
              <button
                type="submit"
                className="btn btn-primary text-center mt-3 mb-4"
              >
                Delete
              </button>
            </div>
          </label>
        </form>

        <div className="container">
          <div className="col-lg-8 col-md-10 col-xs-12">
            <div className="card">
              <header className="text-center text-cursive text-red d-block mt-5">
                User Profiles
              </header>
              {this.state.profiles.map((profile) => {
                return (
                  <div className="card-body text-sm text-sm-left ">
                    <p className="card-body text-sm text-sm-left ">
                      User ID: {profile.id}
                      <br />
                      Name : {profile.first_name} {profile.last_name}
                      <br />
                      Username : {profile.username}
                      <br />
                      Email : {profile.email}
                      <br />
                    </p>
                  </div>

                  // </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
