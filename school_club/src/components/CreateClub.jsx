import React, { useState, useEffect } from 'react'

import {getRequest, postRequest} from '../config/axios.config'
import "../css/CreateClub.css";
import '../css/main_body.css'


function CreateClub(props){
    // const [clubName, setClubName] = useState('')
    // const [description, setDescription] = useState('')
    // const [logo, setLogo] = useState()
    // const [data, setData] = useState([])

    const [club, setClub] = useState({
        clubName: '',
        description: '',
        logo: '',
        
    })

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchMyApi() {
            try{
                let response = await getRequest('/posts')
                console.log(response)
                setData(response.data)
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
                                club_name: club.clubName,
                                description: club.description,
                                logo: club.logo
                            }
                        })
                    } 
                    catch(err){
                        console.log(err)
                    }   
                    postMyApi()   
                    console.log(club.clubName)     
                }        
            }    

 const handleChange = (event) => {
    // setClubName(event.target.name.value)
    // setDescription(event.target.name.value)   
    // console.log(description)
    // console.log(clubName)  
    
    const copy = Object.assign({}, club)
    const e = event.currentTarget
    copy[e.name] = e.value
    setClub(copy)
   }

    return(
        <React.Fragment>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Club Name: 
                        <select name='clubName' value={club.clubName} onChange={handleChange}>
                            {
                                data.map(opt => <option key={opt.id}>{opt.title}</option>)
                            }
                        </select>
                    </label>
                    <label>Description:
                        <textarea type='text' name='description' value={club.description} onChange={handleChange}></textarea>
                    </label>
                    <input type='file' name='logo' value={club.logo} onChange={handleChange}></input>
                    <button type='submit'>Submit</button>
                </form>
            </section>
        </React.Fragment>
    )
}

export default CreateClub;