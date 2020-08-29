import React from 'react';
import {useState, useEffect} from 'react';

import {getRequest, postRequest} from '../../config/axios.config'

function Application(){
    const[application, setApplication] = useState({
        members: '',
        interestedClub: '',
        status: false
    })

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchMyAPI() {
            try{
                let response = await getRequest('/posts')
                console.log(response.data.title)
                setData(response.data)
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
                            member: application.members,
                            interested_club: application.interestedClub,
                            status: application.status
                        }
                })
            }catch(err){
                console.log(err)
            }
        }
        
        postMyApi()
        
    }

    const handleChange = (event) => {
       const copy = Object.assign({}, application)
       const e = event.currentTarget
       copy[e.name] = e.value
       setApplication(copy) 
    }
   
    return(
        <React.Fragment>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Members
                        <input type='text' name='members' value={application.members} placeholder='Member' onChange={handleChange}/>
                    </label>
                        <input type='radio' name='status' value={application.status} onChange={handleChange}/>Status
                        <select name='interestedClub'  value={application.interestedClub} onChange={handleChange}>
                            {
                               data.map(opt => <option key={opt.id}>{opt.title}</option>)
                            }
                        </select>
                        <button type='submit'>Submit</button>
                </form>
            </section>
        </React.Fragment>
    )
}

export default Application;

