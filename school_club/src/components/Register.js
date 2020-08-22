import React from "react";
import { Link } from "react-router-dom";
import "../css/register.css";
import BackArrow from "./back-arrow";

class Register extends React.Component {
  state ={
    First_Name: '',
    Last_Name: '',
    Date_of_Birth: '',
    Address: '',
    Phone_Number: '',
    Email: '',
    Password1: '',
    Password2: ''

  };

  onSubmit = e =>{
    e.preventDefault();
    console.log('submit');
  }

  onChange =e =>{
    this.setState({[e.target.name]: e.target.value});
  }



  render() {
    const { firstName,lastName,dob,address,phone,email,password1,password2}=
    this.state;
    return (
      <React.Fragment>
        <BackArrow/>
       
        <form>
        <div class="form-group">
            <label for="Name">First Name</label>
            <input
              type="text"
              class="form-control"
              name="Name"
              onChange={this.onChange}
              value= {firstName}
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="Name">Last Name</label>
            <input
              type="text"
              class="form-control"
              name="Name"
              onChange={this.onChange}
              value= {lastName}
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="Date_of_Birth">Date of Birth</label>
            <input
              type="text"
              class="form-control"
              name="Date_of_Birth"
              onChange={this.onChange}
              value= {dob}
              placeholder="Date of Birth"
            />
          </div>
          <div class="form-group">
            <label for="Address">Address</label>
            <input
              type="text"
              class="form-control"
              name="Address"
              onChange={this.onChange}
              value= {address}
              placeholder="Address"
            />
          </div>
          <div class="form-group">
            <label for="Phone_Number">Phone Number</label>
            <input
              type="number"
              class="form-control"
              name="Phone_Number"
              onChange={this.onChange}
              value= {phone}
              placeholder="Phone Number"
            />
          </div>
          <div class="form-group">
            <label for="InputEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              name="InputEmail"
              aria-describedby="emailHelp"
              onChange={this.onChange}
              value= {email}
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="InputPassword">Password</label>
            <input
              type="password"
              class="form-control"
              name="InputPassword1"
              onChange={this.onChange}
              value= {password1}
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="InputPassword">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              name="InputPassword2"
              onChange={this.onChange}
              value= {password2}
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>

        <div className="go-Login">
          <Link to="/login">Login</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
