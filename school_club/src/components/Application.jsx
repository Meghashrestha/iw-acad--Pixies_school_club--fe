import React from 'react';
import {useState, useEffect} from 'react';

import {getRequest, postRequest} from '../config/axios.config'

function Application(){
    const[application, setApplication] = useState({
        name: "",
        interest_reason: "",
        email: "",
        club_name: '',
    })

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchMyAPI() {
            try{
                let response = await getRequest('/view-club/')
                console.log(response.data.results)
                setData(response.data.results)
                console.log('test', data)
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
                let response = await postRequest('member-application/',
                {
                            name: application.name,
                            interest_reason: application.interest_reason,
                            email: application.email,
                            club_name: application.club_name
                       
                })
                console.log(application.name)
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
       console.log(application.club_name)
    }
   
    return(
        <React.Fragment>
            <section>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
            <label >Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value= {application.name}
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <select name='club_name'  value={application.club_name} onChange={handleChange}>
                <option value='' key=''>Select Club</option>
                    {
                            data.map(opt => <option key={opt.id} value={opt.id}>{opt.club_name}</option>)
                    }
                </select>
          <div className="form-group">
            <label >Why are you interested to join this club?</label>
            <input
              type="text"
              className="form-control"
              name="interest_reason"
              value= {application.interest_reason}
              placeholder="interest_reason"
              onChange={handleChange}
            />
          </div>
       
          <div className="form-group">
            <label >Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              value= {application.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
 
                    <button type='submit'>Submit</button>
                </form>
            </section>
        </React.Fragment>
    )
}

export default Application;

