import React, { useState } from "react";
import { Link } from "react-router-dom";

import { postRequest } from "../config/axios.config";
import "../css/register.css";
import BackArrow from "./back-arrow";

function Register() {
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    async function postMyApi(){
      try{
        let response = await postRequest('/add-user/',{
          
            first_name: register.firstname,
            last_name: register.lastname,
            middle_name: register.middlename,
            email: register.email,
            username: register.username,
            password: register.password,
          }
)
          console.log(response)
        }
        catch(err){
          console.log(err)
      }
    }
    postMyApi();
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
       
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label >First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value= {register.firstname}
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label >Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value= {register.lastname}
              placeholder="Name"
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
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label >Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              value= {register.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label >Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value= {register.username}
              placeholder="username"
              onChange={handleChange}
            />
          </div>
          <div className="container-fluid d-block ">
            <div className="form-group">
              <label className="mt-5">Username</label>
              <input
                type="text"
                className="form-control "
                name="username"
                value={register.username}
                placeholder="username"
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
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-30 ml-lg-5 mt-lg-4"
            >
              Register
            </button>
            <div className="col ml-5 mt-3 text-left">
              <Link to="/login">Login</Link>
            </div>
          </div>


          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Register;
