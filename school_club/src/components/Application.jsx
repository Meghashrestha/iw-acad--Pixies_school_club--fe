import React from 'react';
import {useState, useEffect} from 'react';

import {getRequest, postRequest} from '../config/axios.config'

function Application(){
    const[application, setApplication] = useState({
        firstname: "",
        lastname: "",
        middlename: "",
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
                            first_name: application.firstname,
                            last_name: application.lastname,
                            middle_name: application.middlename,
                            email: application.email,
                            club_name: application.club_name
                       
                })
                alert("Successfully sent")
              }    
              catch(err){
                  alert("Something went wrong")
                  console.log(err.message)
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
            <label >First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value= {application.firstname}
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label >Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value= {application.lastname}
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label >Middle Name</label>
            <input
              type="text"
              className="form-control"
              name="middlename"
              value= {application.middlename}
              placeholder="Name"
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
                <select name='club_name'  value={application.club_name} onChange={handleChange}>
                <option value='' key=''>Select Club</option>
                    {
                            data.map(opt => <option key={opt.id} value={opt.club_name}>{opt.club_name}</option>)
                    }
                </select>
                    <button type='submit'>Submit</button>
                </form>
            </section>
        </React.Fragment>
    )
}

export default Application;

