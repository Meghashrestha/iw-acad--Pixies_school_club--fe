import React, { Component, useState } from "react";
import axios from 'axios';

import {postRequest} from '../config/axios.config'
import "../css/contact-form.css";

function ContactForm(){
  const [contact, setContact] = useState({
    messageTitle: '',
    messageBody: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    async function postMyApi() {
        try{
            let response = await postRequest('/contact-president/',{
              message_title: contact.messageTitle,
              message: contact.messageBody,
            })
            
        } 
        catch(err){
            console.log(err)
        }    
    }  
    postMyApi()       
  }

  const handleChange = (event) => {
    const copy = Object.assign({}, contact)
    const e = event.currentTarget
    copy[e.name] = e.value
    setContact(copy)
   }
  return (
    <React.Fragment>
    <header className="text-lg text-cursive text-red text-left">Message</header>
    <form className="message-form" onSubmit={handleSubmit}>
      <div className="form-group">
      <label>
        Message Header
        </label>
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
      
        <textarea name='messageBody' className="form-control" value={contact.messageBody} placeholder='Write a Message' onChange={handleChange}></textarea>
      </div>
     <button className="btn btn-warning " type="submit" value="Submit"> Message</button>
    </form>
    </React.Fragment>
  );

}

export default ContactForm;
