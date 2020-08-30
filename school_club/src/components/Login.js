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
      <Link to="/">
      <svg
        width="5em"
        height="2em"
        viewBox="0 0 16 16"
        className="bi bi-arrow-left-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fillRule="evenodd"
          d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
        />
        <path
          fillRule="evenodd"
          d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
        />
      </svg>
      
      </Link>
     
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Username</label>
          <input
            type="text"
            name='username'
            value={login.username}
            className="form-control"
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
            className="form-control"
            id="InputPassword"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <div className="Register">
        <Link to="/login/register">Register</Link>
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
