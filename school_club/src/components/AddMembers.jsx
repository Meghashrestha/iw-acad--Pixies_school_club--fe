import React, { useState, useEffect } from 'react'

import {postRequest, getRequest, patchRequest} from '../config/axios.config'
import "../css/CreateEvent.css";


function AddMember(){
    const [data, setData] = useState(0)
    const [club, setClub] = useState([])
    const [member, setMember] = useState([])
    
    useEffect(() => {
        async function fetchMyMember() {
          try{
              let response = await getRequest('/user-view/')
              console.log('id123',response.data.results)
              setMember(response.data.results)
              console.log('testdata',member)
          }
          catch(err){
              console.log(err)
          }
          
        }
        
        fetchMyMember()
       
  },[])

    useEffect(() => {
        async function fetchMyClub() {
            try{
                let response = await getRequest('/view-club/')
                setClub(response.data.results)
                console.log(response.data.results)
            }
            catch(err){
                console.log(err)
            }
            
          }
          fetchMyClub()
        },[])
         
         

    const handleSubmit = (event) => {
        event.preventDefault();
        async function postMyApi() {    
            try{
                let response = await postRequest('/add-member/',{
                    club_name: data.club,
                    user: data.member,
                })
                alert("Successfully added member to the club")
            }    
            catch(err){
                alert("Something went wrong")
                console.log(err.message)
            }    
        }
        postMyApi()
    }
       
    const handleChangeI = (event) => {
        const copy2 = Object.assign({}, data)
        const e = event.currentTarget
        copy2[e.name] = e.value
        setData(copy2)
    }
    return(
        <React.Fragment>
            <div>
                <h1>member Assign</h1>
                <form onSubmit={handleSubmit}>

                    <select name='member' value={data.member} onChange={handleChangeI}>
                        <option value=''>Select User</option>
                       {    
                           member.map(user => <option key={user.id} value={user.id}>{user.username}</option>)
                       }
                       </select>

                    <select name='club' value={data.club} onChange={handleChangeI}>
                    
                    <option value=''>Select Club</option>
                       {
                           club.map(clubs => <option key={clubs.id} value={clubs.id}>{clubs.club_name}</option>)
                       }
                    </select>
                    <button type='submit'>Assign Member</button>

                </form>
            </div>
        </React.Fragment>
    )

}

export default AddMember;