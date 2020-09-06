import React from "react";

import "../css/News.css";
import {getRequest, deleteRequest} from '../config/axios.config';

export default class DeleteClub extends React.Component {
  state = {
    id: "",
    clubs: [],
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    async function delMyAPI() {
      try {
        let response = await deleteRequest(`delete-club/${this.state.id}`);
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
      let response = await getRequest(`view-club/`);
      this.setState({ clubs: response.data.results });
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
            Delete Club ID:
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
              <header className="text-center text-cursive text-red d-block mt-2">
                CLUBS
              </header>
              {this.state.clubs.map((club) => {
                return (
                  <div className="card-body text-sm text-sm-left pt-1">
                    <p className="card-body text-sm text-sm-left ">
                      ID: {club.id}
                      <br />
                      Club Name : {club.club_name}
                      <br />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
