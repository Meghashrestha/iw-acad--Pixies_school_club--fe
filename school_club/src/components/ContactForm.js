import React, { Component } from "react";
import axios from 'axios';
import "../css/contact-form.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { messageTitle: "" , messageBody: "" };

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Message sent to : " + this.state);

    axios.post('https://localhost:8000/api/member/contact', this.state)
    .then(response=> {
        console.log(response)
    })    
    .catch(error=>{
        console.log(error)
    })  

    event.preventDefault();
    console.log(this.state);
  };

  render() {
      const {messageTitle,messageBody} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="message-title">
        <label>
          Message Title:
          <input
            type="text"
            value={messageTitle}
            name="messageTitle"
            className="form-control"
            id="message-title"
            placeholder="Title"
            onChange={this.handleChange}
          />
        </label></div> 
        <div className="message-body">
        <label>
          Message Title:
          <input
            type="text"
            value={messageBody}
            name="messageBody"
            className="form-control"
            id="message-body"
            placeholder="Title"
            onChange={this.handleChange}
          />
        </label></div>
       <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default ContactForm;
