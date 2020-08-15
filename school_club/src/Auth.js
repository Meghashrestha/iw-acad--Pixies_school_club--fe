import React from "react";
import { Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';


const Auth = () => (
  <div>
    <Route exact path="/login" component={Login} />
    <Route exact path="/login/register" component={Register} />
    
    
    
  </div>
);

export default Auth;
