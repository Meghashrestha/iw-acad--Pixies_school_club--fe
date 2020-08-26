import React, { useState, useEffect } from 'react'

import {postRequest, getRequest} from '../config/axios.config'
import "../css/CreateClub.css";


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
                    user: {
                        event_title: event.eventTitle,
                        event_description: event.eventDescription,
                        event_date: event.eventDate,
                        all: event.all,
                    }
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
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Event Title:
                        <input type='text' name='eventTitle' value={event.eventTitle} placeholder='Title' onChange={handleChange}></input>
                    </label>
                    <label>Event Description:
                        <textarea name='eventDescription' value={event.eventDescription} placeholder='Description' onChange={handleChange}></textarea>
                    </label>
                    <input name='eventDate' type='date' value={event.eventDate} onChange={handleChange}></input>
                    <button type='submit'>Submit</button>
                </form>
            </section>
    )

}

export default CreateEvents;