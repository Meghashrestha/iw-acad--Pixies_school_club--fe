import React, { useState, useEffect } from 'react'

import {postRequest, getRequest} from '../config/axios.config'
import "../css/CreateEvent.css";


function CreateEvents(){
    const [events, setEvents] = useState({
        eventTitle: '',
        eventDescription: '',
        eventDate: ',',
        all: false
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        async function postMyApi() {    
            try{
                let response = await postRequest('/post-event/',{
                        event_title: events.eventTitle,
                        event_description: events.eventDescription,
                        event_date: events.eventDate,
                })
                alert("Successfully created event")
            }    
            catch(err){
                alert("Something went wrong")
                console.log(err)
            }    
        }
        postMyApi()
    }

    const handleChange = (event) => {
        const copy = Object.assign({}, events)

        const e = event.currentTarget
        copy[e.name] = e.value

        setEvents(copy)
        console.log(event.eventDate)
    }



    return(
            <div className="container">
                <header className="text-left text-lg h2 text-cursive text-red mt-5">Events</header>
                <form  className="col-xl-10 col-lg-12 col-md-12 col-sm-12 pl-sm-0 col-12 px-0" onSubmit={handleSubmit}>
                    <div className="form-group pt-3 pl-1 pl-xl-4 pl-lg-4 pl-md-3 pl-sm-1">
                    <label>Event Title:</label>
                        <input type='text' className="form-control w-100" name='eventTitle' value={events.eventTitle} placeholder='Title' onChange={handleChange}></input>
                        </div>
                        <div className="form-group  pt-3 pl-1 pl-xl-4 pl-lg-4 pl-md-3 pl-sm-1">
                    
                        <textarea name='eventDescription' className="form-control  w-100" value={events.eventDescription} placeholder='Write a description' onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group  pt-3 pl-1 pl-xl-4 pl-lg-4 pl-md-3 pl-sm-1">
                    <input className="event-date  w-50 pb-3" name='eventDate' type='date' value={events.eventDate}  onChange={handleChange}></input>
                    </div>
                    <div className="form-group  pt-3 pl-1 pl-xl-4 pl-lg-4 pl-md-3 pl-sm-1">
                    <button className="btn btn-success btn-lg mt-3 mb-4 " type='submit'>Submit</button>
                    </div>
                    
                </form>
            </div>
    )

}

export default CreateEvents;