import React from "react";
import axios from "axios";

import "../css/News.css";

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

    axios
      .delete(`http://127.0.0.1:8000/delete-club/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    alert("Successfully deleted");
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/view-club/`).then((res) => {
      const clubs = res.data.results;
      this.setState({ clubs });
    });
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
