import React from 'react';
import {Component, useState, useEffect} from 'react';

import {getRequest, postRequest} from '../config/axios.config'

export function Application(){
    const [members, setMembers] = useState('')
    const [interestedClub, setInterestedClub] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(() => {
        async function fetchMyAPI() {
            try{
                let response = await getRequest('/posts')
                console.log(response.data.title)
                setInterestedClub(response.data)
            }
            catch(err){
                console.log(err)
            }
            
          }
          fetchMyAPI()
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        async function postMyApi(){
            try{
                let response = await postRequest('/post',{
                        user: {
                            member: members,
                            interestedClub: interestedClub,
                            status: status
                        }
                })
            }catch(err){
                console.log(err)
            }
        }
        postMyApi()
    }

    const handleChange = (event) => {
        setMembers({
            [event.target.name]: event.target.value
        })
        console.log(members)
    }

    return(
        <React.Fragment>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Members
                        <input type='text' name={members} value={members} placeholder='Member' onChange={handleChange}/>
                        <input type='radio' name={status} value={status} onChange={handleChange}/>Status
                        <select name={interestedClub} value={interestedClub}>
                            {
                                interestedClub.map(opt => <option>{opt.title}</option>)
                            }
                        </select>
                        <button type='submit'>Submit</button>
                    </label>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Application;

