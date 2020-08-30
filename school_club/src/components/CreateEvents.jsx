import React, { useState, useEffect } from 'react'

import {postRequest, getRequest} from '../config/axios.config'
import "../css/CreateEvent.css";


function CreateEvents(){

    // const [eventTitle, seteventTitle] = useState('')
    // const [eventDescription, seteventDescription] = useState('')
    // const [eventDate, seteventDate] = useState('')
    // const [all, setAll] = useState(false)

    const [event, setEvent] = useState({
        eventTitle: '',
        eventDescription: '',
        eventDate: ',',
        all: false
    })

    useEffect(() => {
        async function fetchMyApi() {
            try{
                let response = await getRequest('/post')
                console.log(response.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchMyApi()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        async function postMyApi() {    
            try{
                let response = await postRequest('/post',{
                        event_title: event.eventTitle,
                        event_description: event.eventDescription,
                        event_date: event.eventDate,
                        all: event.all,
                })
            }    
            catch(err){
                console.log(err)
            }    
        }
        postMyApi()
    }

    

    const handleChange = (e) => {
        const copy = Object.assign({}, event)

        const evt = e.currentTarget
        copy[evt.name] = evt.value

        setEvent(copy)
        console.log(event.eventDate)
    }



    return(
            <div className="container">
                <header className="text-left text-lg h2 text-cursive text-red">Events</header>
                <form  className="col-md-8" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label>Event Title:</label>
                        <input type='text' className="form-control" name='eventTitle' value={event.eventTitle} placeholder='Title' onChange={handleChange}></input>
                        </div>
                        <div className="form-group">
                    
                        <textarea name='eventDescription' className="form-control" value={event.eventDescription} placeholder='Write a description' onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                    <input className="event-date" name='eventDate' type='date' value={event.eventDate}  onChange={handleChange}></input>
                    </div>
                    <div className="form-group">
                    <button className="btn btn-success btn-lg" type='submit'>Submit</button>
                    </div>
                    
                </form>
            </div>
    )

}

export default CreateEvents;