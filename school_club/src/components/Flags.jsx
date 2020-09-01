import React, { useState, useEffect } from 'react'

import {postRequest, getRequest} from '../config/axios.config'
import "../css/CreateEvent.css";


function Flags(){
    const [user, setUser] = useState({
        staff: '',
    })
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchMyUser() {
            try{
                let response = await getRequest('/user-view/')
                console.log('club:', response.data.results)
                setData(response.data.results)
            }
            catch(err){
                console.log(err)
            }
            
          }
          fetchMyUser()
        },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        async function postMyApi() {    
            try{
                let response = await postRequest('/admin/set-flag/',{
                    is_staff: user.staff
                })
            }    
            catch(err){
                console.log(err)
            }    
        }
        postMyApi()
    }

    const handleChange = (event) => {
        const copy1 = Object.assign({}, user)
        const e = event.currentTarget
        copy1[e.name] = e.value
    }


    return(
        <React.Fragment>
            <div>
                <h1> Assign FLags</h1>
                <form onSubmit={handleSubmit}>
                <input type="radio" name="staff" value={user.staff} onChange={handleChange}/> Staff
                <input type="radio" name="staff" value={user.member} onChange={handleChange}/> Not staff
                <button type='submit'>Add</button>
                </form>
            </div>
        </React.Fragment>
    )

}

export default Flags;