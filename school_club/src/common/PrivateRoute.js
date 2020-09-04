import React, { Component } from "react";
import {connect} from "react-redux";
import { Route, Redirect } from "react-router-dom";



const isUserAuthenticated = () => {
  const token = localStorage.getItem("access_token")
  if (token){
    return true
  }
  return false
}

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
return(
  <Route
    {...rest}
    render={(props) => {
        // if (auth.isLoading){
        //   console.log('loadingg')
        //     return <h2>Loading...</h2>;
        // } else if (!isUserAuthenticated()) {
        //   console.log(isUserAuthenticated())
        //     return <Redirect to="/login" />;
        // } else {
        //   console.log(isUserAuthenticated())
        //     return <Component {...props} />;
        if(isUserAuthenticated()){
          return <Component {...props} />;
        }
        else{

        return <Redirect to="/login" />
        }
        }
      
    }
  />
  
)};


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect()(PrivateRoute);
