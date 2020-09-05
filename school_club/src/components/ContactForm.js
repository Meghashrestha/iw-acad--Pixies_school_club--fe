import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../css/contact-form.css";
import { getRequest, postRequest } from "../config/axios.config";

function ContactForm(props) {
  const [contact, setContact] = useState({
    messageTitle: "",
    messageBody: "",
    club: "",
    sent_by: "",
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await getRequest("/view-club/");
        setData(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMyAPI();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    async function postMyApi() {
      try {
        let response = await postRequest("/contact-president/", {
          message_title: contact.messageTitle,
          message: contact.messageBody,
          club: contact.club_name,
          sent_by: props.sent_by,
        });
        alert("Successfully sent");
      } catch (err) {
        alert("Something went wrong");
        console.log(err.message);
      }
    }
    postMyApi();
  };

  const handleChange = (event) => {
    const copy = Object.assign({}, contact);
    const e = event.currentTarget;
    copy[e.name] = e.value;
    setContact(copy);
  };

  return (
    <React.Fragment>
      <header className="text-left text-cursive text-red d-block mt-5">
        Message
      </header>
      <form className="message-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Message Header</label>
          <input
            type="text"
            value={contact.messageTitle}
            name="messageTitle"
            className="form-control"
            id="message-title"
            placeholder="Header"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="messageBody"
            className="form-control"
            value={contact.messageBody}
            placeholder="Write a Message"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group mt-3 d-inline">
          <label>To</label>
          <select
            className="form-control col-4"
            name="club_name"
            value={contact.club_name}
            onChange={handleChange}
          >
            <option>Select Club</option>
            {data.map((opt) => (
              <option key={opt.id}>{opt.club_name}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-warning" type="submit" value="Submit">
          {" "}
          Message
        </button>
      </form>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  sent_by: state.auth.first_name,
});

export default connect(mapStateToProps, null)(withRouter(ContactForm));
