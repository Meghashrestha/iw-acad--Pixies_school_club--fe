
import React, { Component, useState, useEffect } from "react";
import axios from 'axios';

import { getRequest, postRequest} from '../config/axios.config'
import "../css/contact-form.css";

function ContactForm(){
  const [contact, setContact] = useState({
    messageTitle: "",
    messageBody: "",
    club:"",
    // username:'',
  })
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
        try{
            let response = await getRequest('/view-club/')
            console.log(response.data.results)
            setData(response.data.results)
            console.log('test', data)
        }
        catch(err){
            console.log(err)
        }
        
      }
      fetchMyAPI()
},[])


  const handleSubmit = (event) => {
    event.preventDefault();
    async function postMyApi() {
        try{
            let response = await postRequest('/contact-president/',{
              message_title: contact.messageTitle,
              message: contact.messageBody,
              club: contact.club,
              // username:contact.username
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
    // console.log(contact.username)
    console.log(contact.club)
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
      <select name='club_name'  value={contact.club} onChange={handleChange}>
                    {
                            data.map(opt => <option key={opt.id}>{opt.club}</option>)
                    }
                </select>
     <button className="btn btn-warning " type="submit" value="Submit"> Message</button>
    </form>
    </React.Fragment>
  );
}

export default ContactForm;
