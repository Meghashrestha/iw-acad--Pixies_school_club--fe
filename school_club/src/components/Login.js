import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {login} from './config/'

import "../css/login.css";
import BackArrow from "./back-arrow";

// const api = axios.create({
//   baseURL: `127.0.0.1:8000/`
// })

class Login extends React.Component {
  state ={
    
    Email: '',
    Password: '',
   

  };

  onSubmit = e =>{
    e.preventDefault();
    console.log('submit');
  }

  onChange =e =>{
    this.setState({[e.target.name]: e.target.value});
  }




  render() {
    const { email,password}=
    this.state;
    return (
      <React.Fragment>
       <BackArrow/>
        <form>
          <div class="form-group">
            <label for="InputEmail">Username</label>
            <input
              type="Email"
              class="form-control"
              name="Email"
              onChange={this.onChange}
              value= {email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              type="password"
              name='password'
              value={password}
              class="form-control"
              name="Password"
              onChange={this.onChange}
              value= {password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>

        <div className="Register">
          <Link to="/login/register">Register</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
