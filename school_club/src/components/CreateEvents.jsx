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
                        all: events.all,
                })
            }    
            catch(err){
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
                <header className="text-left text-lg h2 text-cursive text-red">Events</header>
                <form  className="col-md-8" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label>Event Title:</label>
                        <input type='text' className="form-control" name='eventTitle' value={events.eventTitle} placeholder='Title' onChange={handleChange}></input>
                        </div>
                        <div className="form-group">
                    
                        <textarea name='eventDescription' className="form-control" value={events.eventDescription} placeholder='Write a description' onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                    <input className="event-date" name='eventDate' type='date' value={events.eventDate}  onChange={handleChange}></input>
                    </div>
                    <div className="form-group">
                    <button className="btn btn-success btn-lg" type='submit'>Submit</button>
                    </div>
                    
                </form>
            </div>
    )

}

export default CreateEvents;