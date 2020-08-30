import React, { Component } from "react";
import axios from "axios";
import "../css/contact-form.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { messageTitle: "", messageBody: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Message sent to : " + this.state);

    axios
      .post("https://localhost:8000/api/member/contact", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { messageTitle, messageBody } = this.state;
    return (
      <React.Fragment>
        <header className="text-lg text-cursive text-red text-left">
          Message
        </header>
        <form className="message-form " onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Message Header</label>
            <input
              type="text"
              value={messageTitle}
              name="messageTitle"
              className="form-control"
              id="message-title"
              placeholder="Header"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
            
              name="contactForm"
              className="form-control"
              value={messageBody}
              placeholder="Write a Message"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button className="btn btn-warning " type="submit" value="Submit">
            
            Message
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactForm;
