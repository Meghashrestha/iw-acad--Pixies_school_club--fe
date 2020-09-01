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
          history.push('/login')
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
              className="form-control mb-5"
              name="email"
              aria-describedby="emailHelp"
              value= {register.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          </div>
          
          <div className="col-xl-6 col-lg-6 d-md-10 d-sm-12 d-xs-12">
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
