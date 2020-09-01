import React, { useState, useEffect } from 'react'

import {postRequest, getRequest} from '../config/axios.config'
import "../css/CreateEvent.css";


function AddPresident(){
    const [user, setUser] = useState({
        name: '',
        club: '',
    })
    const [club, setClub] = useState([])
    const [president, setPresident] = useState([])

    useEffect(() => {
        async function fetchMyClub() {
            try{
                let response = await getRequest('/view-club/')
                console.log('club:', response.data.results)
                setClub(response.data.results)
                console.log('club cdata',club)
            }
            catch(err){
                console.log(err)
            }
            
          }
          fetchMyClub()
        },[])
         
          useEffect(() => {
          async function fetchMyPresident() {
            try{
                let response = await getRequest('/user-view/')
                console.log('user', response.data.results[0])
                setPresident(response.data.results)
                console.log('preseident data',president)
            }
            catch(err){
                console.log(err)
            }
            
          }
          
          fetchMyPresident()
         
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        async function postMyApi() {    
            try{
                let response = await postRequest('/add-president/',{
                    club_name: club,
                    user: president,
                })
            }    
            catch(err){
                console.log(err)
            }    
        }
        postMyApi()
    }

    const handleChange = (event) => {
        
        console.log(event.currentTarget.value)
    }

    // const handleChangeII = (event) => {
    //     const copy2 = Object.assign({}, club)
    //     const e = event.currentTarget
    //     copy2[e.name] = e.value
    //     setclub(copy2)
    // }
console.log('test111', president)
console.log('test222', club)


    return(
        <React.Fragment>
            <div>
                <h1>President Assign</h1>
                <form onSubmit={handleSubmit}>
                    <select name='president' value={user.name} onChange={handleChange}>
                        <option value=''>Select</option>
                       {    
                           president.map(user => <option key={user.id} value={user.username}>{user.username}</option>)
                       }
                    </select>
                    <select name='club' value={user.club} onChange={handleChange}>
                       {
                           club.map(clubs => <option key={clubs.id}>{clubs.club_name}</option>)
                       }
                    </select>
                    <button type='submit'>Add</button>
                </form>
            </div>
        </React.Fragment>
    )

}

export default AddPresident;