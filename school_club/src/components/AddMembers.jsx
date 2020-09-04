import React, { useState, useEffect } from 'react'

import {postRequest, getRequest, patchRequest} from '../config/axios.config'
import "../css/CreateEvent.css";


function AddMember(){
  const [member, setMember] = useState([])
    const [data, setData] = useState(0)
    const [club, setClub] = useState([])
    const [status, setStatus] = useState();
    console.log('status',status)
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
   
       
    async function patchtMyApi() {
        
        try {
          let response = await patchRequest(
            `/info/view-profile/${data.member}/`,
            {
              is_member: status,
            }
          );
        } catch (err) {
          console.log(err);
        }
      }
      patchtMyApi();
    
}

    const handleChangeI = (event) => {
        const copy2 = Object.assign({}, data)
        const e = event.currentTarget
        copy2[e.name] = e.value
        setData(copy2)
    }

    const toggleStatus = (event) => {
        setStatus((value) => !value);
        console.log(event.target.checked);
      };

    return(
        <React.Fragment>
            <div>
            <header className="text-lg text-cursive text-red text-left mt-5">
          Add Member
        </header>
        <form className="col-xl-6 col-lg-7 col-md-8 col-sm-9 col-10 pr-0 pt-2 pb-0 px-0 pt-sm-4 pb-sm-4 px-sm-4" onSubmit={handleSubmit}>
          <div className="form-group col-12 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <select name='member' value={data.member} className="form-control" onChange={handleChangeI}>
                        <option value=''>Select User</option>
                       {    
                           member.map(user => <option key={user.id} value={user.id}>{user.username}</option>)
                       }
                       </select>
             </div>
                    <div className="form-group col-12 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <select name='club' className="form-control" value={data.club} onChange={handleChangeI}>
                    
                    <option value=''>Select Club</option>
                       {
                           club.map(clubs => <option key={clubs.id} value={clubs.id}>{clubs.club_name}</option>)
                       }
                    </select>
                    </div>
                    <div className="form-group col-12 col-sm-12 col-lg-12 text-cursive">
          <input
            type="checkbox"
              className="col-3 col-xl-2 col-lg-2 col-md-2 col-sm-2"  
            onChange={toggleStatus}
            value={status}
            checked={status}
          />Confirm Member
        </div>
                    <button className="btn btn-info ml-2 ml-sm-2 ml-md-2 ml-lg-2 ml-xl-3 mb-3 " type="submit" value="Submit">
            Add
          </button>

                </form>
            </div>
        </React.Fragment>
    )

}


export default AddMember;