import React, { useState, useEffect } from 'react'

import {patchRequest, getRequest} from '../config/axios.config'
import "../css/CreateEvent.css";


function Flags(){
    const [status, setStatus] = useState()
    const toggleStatus = (event) =>{
        setStatus(value => !value);
        console.log(event.target.checked)
    } 
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
                let response = await patchRequest('/admin/set-flag/',{
                    is_staff: status
                })
            }    
            catch(err){
                console.log(err)
            }    
        }
        postMyApi()
    }

    return(
        <React.Fragment>
            <div>
                <h1> Assign FLags</h1>
                <form onSubmit={handleSubmit}>
                <input type="checkbox" onChange={toggleStatus} checked={status}/> 
                <button type='submit'>Add</button>
                </form>
            </div>
        </React.Fragment>
    )

}

export default Flags;