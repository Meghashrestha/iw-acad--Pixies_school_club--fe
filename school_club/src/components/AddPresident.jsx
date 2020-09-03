import React, { useState, useEffect } from 'react'

import "../css/CreateEvent.css";
import {postRequest, getRequest, patchRequest} from '../config/axios.config'


function AddPresident(){
    const [data, setData] = useState(0)
    const [club, setClub] = useState([])
    const [president, setPresident] = useState([])
    const [status, setStatus] = useState()
    const [id, setId] = useState(0)
    const member = false
    
    useEffect(() => {
        async function fetchMyPresident() {
          try{
              let response = await getRequest('/user-view/')
              console.log('id123',response.data.results)
              setPresident(response.data.results)
              console.log('testdata',president)
          }
          catch(err){
              console.log(err)
          }
          
        }
        
        fetchMyPresident()
       
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
                let response = await postRequest('/add-president/',{
                    club_name: data.club,
                    user: data.president,
                })
                alert("Successfully assigned president to the club")
            }    
            catch(err){
                alert("Something went wrong")
                console.log(err.message)
            }    
        }
        postMyApi()

        async function patchtMyApi() {    
            try{
                let response = await patchRequest(`/info/view-profile/${data.president}/`,{
                    is_staff: status,
                    is_member: member
                })
            }    
            catch(err){
                console.log(err)
            }    
        }
        patchtMyApi()
    }

    const handleChangeI = (event) => {
        const copy2 = Object.assign({}, data)
        const e = event.currentTarget
        copy2[e.name] = e.value
        setData(copy2)
    }

    const toggleStatus = (event) =>{
        setStatus(value => !value);
        console.log(event.target.checked)
    } 

    console.log('yser',data)
    console.log('club',data.club)
    console.log(status)
    return(
        <React.Fragment>
            <div>
                <h1>President Assign</h1>
                <form onSubmit={handleSubmit}>
                    {/* {president.map(user => setId(user.id))} */}
                
                    <select name='president' value={data.president} onChange={handleChangeI}>
                        <option value=''>Select User</option>
                       {    
                           president.map(user => <option key={user.id} value={user.id}>{user.username}</option>)
                       }
                       </select>

                    <select name='club' value={data.club} onChange={handleChangeI}>
                    
                    <option value=''>Select Club</option>
                       {
                           club.map(clubs => <option key={clubs.id} value={clubs.id}>{clubs.club_name}</option>)
                       }
                    </select>
                    <input type="checkbox" onChange={toggleStatus} value={status} checked={status}/> 
                    <button type='submit'>Assign President</button>

                </form>
            </div>
        </React.Fragment>
    )

}

export default AddPresident;