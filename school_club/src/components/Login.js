import React, { useState } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {postRequest} from '../config/axios.config'

import {setsuperAdmin} from '../actions/message'

import "../css/login.css";

function Login(props){

  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    async function postMyApi(){
      const token = ''
      try{
        let response = await postRequest('/login/',{
            username: login.username,
            password: login.password,
          
          }, false)
          localStorage.setItem('access_token', response.data.token )
          props.setIsSuperAdmin(true)
          console.log('token:',   token)
        }
        catch(err){
          console.log(err)
      }
    }
    postMyApi()
  }

const handleChange = (event) => {
  const copy = Object.assign({}, login)
  const e = event.currentTarget
  copy[e.name] = e.value
  setLogin(copy)
}


  return (
    <React.Fragment>
      <BackArrow/>
      <div class="container col-3">
      <form className="col-12 mt-5"onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="mt-4">Username</label>
          <input
            type="text"
            name='username'
            value={login.username}
            className="form-control w-100"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input
            type="password"
            name='password'
            value={login.password}
            className="form-control w-100"
            id="InputPassword"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </div>
        <div class="col text-center">
        <button type="submit" className="btn btn-primary text-center mt-3 mb-4">
          Login
        </button>
        </div>
      </form>

      <div className="col text-center mt-4">
        <Link to="/login/register">Register</Link>
      </div>
      </div>
      
    </React.Fragment>
  );

}

// const mapStateToProps = () => ({

// })

const mapDispatchToProps = (dispatch) => ({
  setIsSuperAdmin: (status) => dispatch(setsuperAdmin(status))
})

export default connect(null, mapDispatchToProps)(Login);
