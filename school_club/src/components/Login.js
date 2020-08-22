import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import BackArrow from "./back-arrow";

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
            <label for="InputEmail">Email address</label>
            <input
              type="Email"
              class="form-control"
              name="Email"
              onChange={this.onChange}
              value= {email}
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              type="password"
              class="form-control"
              name="Password"
              onChange={this.onChange}
              value= {password}
              placeholder="Password"
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
