import React, { useState, useEffect } from 'react'

import {getRequest, postRequest} from '../config/axios.config'
import "../css/CreateClub.css";

function CreateClub(props){
    const [club, setClub] = useState({
        clubName: '',
        description: '',
    })

    const[logo, setLogo] = useState(null)

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchMyApi() {
            try{
                let response = await getRequest('posts/')
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
                  const fd = new FormData();
                  fd.append('image', logo, logo.name)
                    try{
                        let response = await postRequest('posts',{
                            Club: {
                                club_name: club.clubName,
                                description: club.description,
                                logo: fd
                            },
                            //     onUploadProgress: progressEvent => {
                            //       console.log('uploaded:' + (progressEvent.loaded / progressEvent.total *100))
                                
                            // }
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
      <header className="text-cursive text-red d-block">Create Club</header>
      <section className="section-form">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="wrap-input">
            <span className="label-input">Club Name</span>
            <select name='clubName' className="class_name" value={club.clubName} onChange={handleChange} placeholder="Name">
                          {
                              data.map(opt => <option key={opt.id}>{opt.title}</option>)
                          }
                      </select>
          </div>
          <div className="wrap-input">
            <span className="label-input">Description: </span>
            <textarea type='text' name='description' value={club.description} onChange={handleChange} placeholder="Give a description"></textarea>
          </div>
          <div className="logo-div">
            <span className="label-input">Logo: </span>
            <input type='file' name='logo' onChange={handleFileChange}></input>
          </div>

          <div class="form-btn-class">
            <button class="form-btn" type="submit" >Create</button>
           
          </div>
        </form>
      </section>
    </React.Fragment>
    )


        
}

export default CreateClub;