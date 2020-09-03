
import React, { useState, useEffect } from "react";

import { getRequest, postRequest} from '../config/axios.config'
import "../css/contact-form.css";

function ContactForm(){
  const [contact, setContact] = useState({
    messageTitle: "",
    messageBody: "",
    club:"",
  })
  
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
        try{
            let response = await getRequest('/view-club/')
            setData(response.data.results)
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
              club: contact.club_name,
            })
            alert("Successfully sent")
            }    
            catch(err){
                alert("Something went wrong")
                console.log(err.message)
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
      <select className='col-3' name='club_name'  value={contact.club_name} onChange={handleChange}>
      <option>Select Club</option>
                    {
                            data.map(opt => <option key={opt.id}>{opt.club_name}</option>)
                    }
                </select>
     <button className="btn btn-warning " type="submit" value="Submit"> Message</button>
    </form>
    </React.Fragment>
  );
}

export default ContactForm;
