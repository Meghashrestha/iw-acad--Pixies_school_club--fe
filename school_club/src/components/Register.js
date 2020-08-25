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
    console.log(this.state);
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
        <div className="form-group">
            <label >First Name</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              onChange={this.onChange}
              value= {firstName}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label >Last Name</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              onChange={this.onChange}
              value= {lastName}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label >Date of Birth</label>
            <input
              type="text"
              className="form-control"
              name="Date_of_Birth"
              onChange={this.onChange}
              value= {dob}
              placeholder="Date of Birth"
            />
          </div>
          <div className="form-group">
            <label >Address</label>
            <input
              type="text"
              className="form-control"
              name="Address"
              onChange={this.onChange}
              value= {address}
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <label >Phone Number</label>
            <input
              type="number"
              className="form-control"
              name="Phone_Number"
              onChange={this.onChange}
              value= {phone}
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <label >Email address</label>
            <input
              type="email"
              className="form-control"
              name="InputEmail"
              aria-describedby="emailHelp"
              onChange={this.onChange}
              value= {email}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label >Password</label>
            <input
              type="password"
              className="form-control"
              name="InputPassword1"
              onChange={this.onChange}
              value= {password1}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label >Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="InputPassword2"
              onChange={this.onChange}
              value= {password2}
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
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
