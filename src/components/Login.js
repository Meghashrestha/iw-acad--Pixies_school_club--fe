import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "../css/login.css";
import { postRequest } from "../config/axios.config";
import BackArrow from "./back-arrow";
import { setUser } from "../actions/message";


function Login(props) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
  });

  const token = localStorage.getItem("access_token");
  let history = useHistory();

  const validate = () => {
    let isError = false;
    let usernameError = "";
    let passwordError = "";

    if (login.username.length === 0) {
      isError = true;
      usernameError = "Username length must be greater than 0";
    }

    if (login.password.length === 0) {
      isError = true;
      passwordError = "Password length must be greater than 0";
    }

    if (isError) {
      setLogin((prevState) => ({
        ...prevState,
        usernameError,
        passwordError,
      }));
    }
    return isError;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validate();

    if (err) {
      setLogin((prevState) => ({
        ...prevState,
        username: "",
        password: "",
      }));
    } else {
      async function postMyApi() {
        const token = "";
        try {
          let response = await postRequest(
            "/login/",
            {
              username: login.username,
              password: login.password,
            },
            false
          );
          localStorage.setItem("access_token", response.data.token);
          const userInfo = {
            isSuperAdmin: response.data.is_superuser,
            isStaff: response.data.is_staff,
            isMember: response.data.is_member,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            middle_name: response.data.middle_name,
            email: response.data.email,
            id: response.data.id,
          };
          props.setUser(userInfo);
          history.push("/panel/dashboard");
        } catch (err) {
          console.log(err);
          if (err.response.status === 400) {
            alert("Invalid username or password");
          } else {
            alert("Oops something went wrong");
          }
        }
      }
      postMyApi();
    }
  };

  const handleChange = (event) => {
    const copy = Object.assign({}, login);
    const e = event.currentTarget;
    copy[e.name] = e.value;
    setLogin(copy);
  };

  console.log(login);
  if (token) {
    history.push("/");
    return null;
  }

  return (
    <React.Fragment>
      <BackArrow />
      <div class="container ">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-2 col-sm-1 col-xs-1"></div>
          <form
            className="d-block col-xl-4 col-lg-5 col-md-8 col-sm-8 col-xs-8"
            onSubmit={handleSubmit}
          >
            <div className="form-group ">
              <label className="mt-4">Username</label>
              <input
                type="text"
                name="username"
                value={login.username}
                className="form-control w-100"
                id="InputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                errorText={login.passwordError}
                onChange={handleChange}
              />
            </div>
            <div className="form-group ">
              <label>Password</label>
              <input
                type="password"
                name="password"
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
              <button
                type="submit"
                className="btn btn-primary text-center mt-3 mb-4"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="col text-center mt-1">
          <Link to="/login/register">Register</Link>
        </div>
      </div>
    </React.Fragment>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
