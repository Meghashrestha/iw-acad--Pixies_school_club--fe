import React, { useState } from "react";
import { Link , withRouter, useHistory} from "react-router-dom";

import { postRequest } from "../config/axios.config";
import "../css/register.css";
import BackArrow from "./back-arrow";

function Register() {
  const history = useHistory()
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    username: "",
    password: "",

    usernameError: '',
    passwordError: '',
    firstnameError: "",
    lastnameError: "",
    middlenameError: "",
    emailError: "",
  });

  const validate = () => {
    let isError = false;
    let usernameError = ''
    let passwordError = ''
    let firstnameError = ''
    let lastnameError = ''
    let middlenameError = ''
    let emailError = ''

    if (register.username.length == 0 ){
      isError = true;
      usernameError = 'Username length must be greater than 0'
      console.log(usernameError)
    }

    if ( register.password.length == 0){
      isError = true;
      passwordError = 'Password length must be greater than 0'
      console.log(passwordError)
    }

    if (register.firstname.length == 0 ){
      isError = true;
      firstnameError = 'First name length must be greater than 0'
      console.log(firstnameError)
    }

    if ( register.lastname.length == 0){
      isError = true;
      lastnameError = 'Last name length must be greater than 0'
      console.log(lastnameError)
    }

    if ( register.email.length == 0){
      isError = true;
      emailError = 'Last name length must be greater than 0'
      console.log(emailError)
    }
    // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if ( reg.test(register.email) == false){
    //   isError = true;
    //   emailError = 'Invalid email address'
    // }
    console.log("datataat",isError)

    if(isError){
     
      setRegister(prevState => ({
        ...prevState, usernameError, passwordError, firstnameError, middlenameError, lastnameError, emailError
      }))
    }
    return isError;

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validate(); 
    
    if(err){
      setRegister(prevState => ({
        ...prevState, 
        username: '',
        password: '',
        firstname: "",
        lastname: "",
        middlename: "",
        email: "",
      }))
      console.log("error", err)
    }
    else{
      console.log("error pos")
      async function postMyApi(){
        try{
          let response = await postRequest('/add-user/',{
            
              first_name: register.firstname,
              last_name: register.lastname,
              middle_name: register.middlename,
              email: register.email,
              username: register.username,
              password: register.password,
            }, false
            )
            history.push('/login')
            console.log(response)
            alert('success')
          }
          catch(err){
            if(err.response.status == 400){
              alert('Invalid form data')
            }
            else{
              alert("Oops something went wrong")
        }
      }
     
    }
    postMyApi();
  }
};

  const handleChange = (event) => {
    const copy = Object.assign({}, register);
    const e = event.currentTarget;
    copy[e.name] = e.value;
    setRegister(copy);
  };

    return (
      <React.Fragment>
        <BackArrow/>
       <div className="container col-xs-12">
        <form className="d-xl-flex d-lg-flex d-md-block d-sm-block d-xs-block col-10 col-xl-10 col-md-12 col-sm-12 col-xs-12" onSubmit={handleSubmit}>
          <div className="col-xl-6 col-lg-6 d-md-10 d-sm-12 d-xs-12">
        <div className="form-group ">
            <label >First Name</label>
            <input
              type="text"
              className="form-control col-xs-12"
              name="firstname"
              value= {register.firstname}
              placeholder="Name"
              errorText={register.firstnameError}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label >Last Name</label>
            <input
              type="text"
              className="form-control col-xs-12"
              name="lastname"
              value= {register.lastname}
              placeholder="Name"
              errorText={register.lastnameError}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label >Middle Name</label>
            <input
              type="text"
              className="form-control"
              name="middlename"
              value= {register.middlename}
              placeholder="Name"
              errorText={register.middlenameError}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label >Email address</label>
            <input
              type="email"
              className="form-control mb-5"
              name="email"
              aria-describedby="emailHelp"
              value= {register.email}
              placeholder="Enter email"
              errorText={register.emailError}
              onChange={handleChange}
            />
          </div>
          </div>
          
          <div className="col-xl-6 col-lg-6 d-md-10 d-sm-12 d-xs-12">
            <div className="form-group">
              <label className="mt-5">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={register.username}
                placeholder="username"
                errorText={register.usernameError}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={register.password}
                placeholder="Password"
                errorText={register.passwordError}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-30 ml-lg-5 mt-lg-4"
            >
              Register
            </button>
            <div className="col mt-3 text-left ml-5">
              <Link to="/login">Login</Link>
            </div>
          </div>


         
        </form>
        </div>
    </React.Fragment>
  );
}

export default withRouter(Register) ;
