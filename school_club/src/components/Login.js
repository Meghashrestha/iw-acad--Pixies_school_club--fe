import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import {postRequest, getRequest} from '../config/axios.config'

import BackArrow from './back-arrow'
import {setsuperAdmin} from '../actions/message'

import "../css/login.css";

function Login(props){

  const [login, setLogin] = useState({
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
  })
  
  const token = localStorage.getItem('access_token')

  let history = useHistory()

  const [check, setCheck] = useState([])
  const [checkName, setCheckName] = useState([])

  useEffect(() => {
    async function fetchMyApi(){
      try{
        let response = await getRequest('/user-view/')
        setCheck(response.data.results)
      }
      catch(err){
        console.log('error',err.message)
      }
    }
    fetchMyApi()
  },[])
  
  const validate = () => {
    let isError = false;
    const errors = {}
    let usernameError = ''
    let passwordError = ''

    if (login.username.length == 0 ){
      isError = true;
      usernameError = 'Username length must be greater than 0'
    }

    if ( login.password.length == 0){
      isError = true;
      passwordError = 'Password length must be greater than 0'
    }
    
    if(isError){
     
      setLogin(prevState => ({
        ...prevState, usernameError, passwordError
      }))
    }
    return isError;
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const err = validate();
    console.log('test', err)
    if(err){
      setLogin(prevState => ({
        ...prevState, username: '', password: ''
      }))
    }
    else{
      async function postMyApi(){
        const token = ''
        try{
          let response = await postRequest('/login/',{
              username: login.username,
              password: login.password,
            
            }, false)
            localStorage.setItem('access_token', response.data.token )
            props.setIsSuperAdmin(true)
            history.push('/')
          }
          catch(err){
            if(err.response.status == 400){
              alert('Invalid username or password')
            }
            else{
              alert("Oops something went wrong")
            }
        }
      }
      postMyApi()
    }
    }
    

const handleChange = (event) => {
  const copy = Object.assign({}, login)
  const e = event.currentTarget
  copy[e.name] = e.value
  setLogin(copy)
}

console.log(login)
  if(token){
    history.push('/')
    return null
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
            errorText={login.usernameError}
            onChange={handleChange}
          />
          <span>{login.usernameError}</span>
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
            errorText={login.passwordError}
            onChange={handleChange}
          />
        </div>
        <span>{login.passwordError}</span>
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

export default connect(null, mapDispatchToProps)(withRouter(Login));
