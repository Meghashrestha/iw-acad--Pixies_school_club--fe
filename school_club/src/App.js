import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Auth from "./Auth";
import Des from "./Des";
// import Event from "./components/Event/Event";
import Panel from "./components/Panel";
import PanelRouter from './components/panelrouter';
import {Provider} from 'react-redux';
import store from './store';
import PrivateRoute from "./common/PrivateRoute";
import {loadUser} from "./actions/auth";

import Create from "./components/CreateClub";
import MainBody from './components/MainBody'
import UploadGallery from './components/UploadGallery'
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
 
  componentDidMount(){
    store.dispatch(loadUser());
  }

  // /**
//  * /home -> home 
//  * /login ->, login noavabar
//  * /register ->  register nonavbar
//  * /panel -> panel home -> /panel/* no navbar
//  * /gallery -> gallery
//  * /clubs - > clubs
//  * /about
 
//  */
render(){
  return (
    <Provider store={store}>
    <Router>
    <Switch>
      <Route path="/clubs/description">
        <Des />
      </Route>
      <Route path="/login">
        <Auth />
      </Route>

      <PrivateRoute path="/panel" component={MainBody}/>

      <Route path="/">
        <Navbar />
        <Routes />
        {/* <Event isLoading={isLoading} items={items} /> */}
        <UploadGallery />
        <Footer />
      </Route>
    </Switch>
  </Router>
  
  </Provider>
  );
}
 
};
export default App;




