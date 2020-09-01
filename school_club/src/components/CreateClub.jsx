import React, { useState, useEffect } from 'react'

import {getRequest, postRequest} from '../config/axios.config'
import "../css/CreateClub.css";

function CreateClub(props){
    const [club, setClub] = useState({
        clubName: '',
        description: '',
    })

    const[logo, setLogo] = useState('hi')

    useEffect(() => {
        async function fetchMyApi() {
            try{
                let response = await getRequest('/view-club')
                console.log(response.data)
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
                  // const fd = new FormData();
                  // fd.append('image', logo, logo.name)
                    try{
                        let response = await postRequest('/add-club/',{
                                club_name: club.clubName,
                                description: club.description,
                                // logo: fd
                        })
                        
                    } 
                    catch(err){
                        console.log(err)
                    }    
                }  
                postMyApi()   
                console.log(club.clubName)          
            }    

 const handleChange = (event) => {
    const copy = Object.assign({}, club)
    const e = event.currentTarget
    copy[e.name] = e.value
    setClub(copy)
   }

   const handleFileChange = (event) => {
    setLogo(event.currentTarget.files[0])
    console.log('data',event.currentTarget.files[0])
    console.log('pic', logo)
   }

    return(
      <React.Fragment>
        
      <header className="text-left text-cursive text-red">Create Club</header>
      
        
          {/* <div className="form-group">
            <span className="text-cursive text-red h5">Club Name</span> */}
            {/* <select name='clubName' className="class_name" value={club.clubName} onChange={handleChange} placeholder="Name">
                          {
                              data.map(opt => <option key={opt.id}>{opt.title}</option>)
                          }
                      </select> */}
                      {/* <input type='text'
                      name='clubName' className="form-control" 
                      value={club.clubName} onChange={handleChange}
                       placeholder="Name" /> */}
          {/* </div>
          <div className="form-group"> */}
            
            {/* <textarea type='text' className="form-control" name='description' value={club.description} onChange={handleChange} placeholder="Give a description"></textarea> */}
          {/* </div> */}
          {/* <div className="logo-div">
            <span className="label-input md-col-3">Logo: </span><br/>
            <input type='file' name='logo' onChange={handleFileChange}></input>
          </div> */}

         
            {/* <button className="btn btn-success" type="submit" >Create</button> */}
           

        <div class="container ">
        <div className="row">
        
          
          <form className="col-xl-10 col-lg-10 col-md-10 col-sm-12 pl-sm-0 col-12 pl-0" onSubmit={handleSubmit}>
            <div className="form-group w-100 pt-3 pl-1 pl-xl-4 pl-lg-4 pl-md-3 pl-sm-1">
              <label className="mt-4">Club Name</label>
              <input type='text'
                      name='clubName' className="form-control" 
                      value={club.clubName} onChange={handleChange}
                       placeholder="Name" />
            </div>
            <div className="form-group w-100 pt-3 pl-1 pl-xl-4 pl-lg-4 pl-md-3 pl-sm-1">
              <label>Description</label>
              <textarea type='text' className="form-control" name='description' value={club.description} onChange={handleChange} placeholder="Give a description"></textarea>
            </div>
            <div class="col text-center">
              <button
                type="submit"
                className="btn btn-primary text-center mt-3 mb-4"
              >
                Create
              </button>
            </div>
          </form>
        </div>

         </div> 
        
      
    </React.Fragment>
    )


        
}

export default CreateClub;