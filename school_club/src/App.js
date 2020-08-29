import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import Navbar from "./components/MainLayout/Navigation";
import Footer from "./components/MainLayout/Footer";
import Auth from "./Auth";
import Des from "./Des";
// import Event from "./components/Event/Event";
import Panel from "./components/DashboardComponents/Panel";
import PanelRouter from './components/panelrouter';
import {Provider} from 'react-redux';
import store from './store';
import PrivateRoute from "./common/PrivateRoute";
import {loadUser} from "./actions/auth";

import Create from "./components/DashboardComponents/CreateClub";
import MainBody from './components/DashboardComponents/MainBody'


class App extends Component {
 
  componentDidMount(){
    store.dispatch(loadUser());
  }
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

        {/* <PrivateRoute path="/panel">
          <Panel/>
          <PanelRouter />
        </PrivateRoute> */}

        {/* <Route path='/panel'>
          <Panel/>
          <PanelRouter />
        </Route> */}

        <Route path="/panel">
         <MainBody/>
        </Route>

        <Route path="/">
          <Navbar />
          <Routes />
          {/* <Event isLoading={isLoading} items={items} /> */}

          <Footer />
        </Route>
      </Switch>
    </Router>
    
    </Provider>
    
  );
}
 
};
export default App;
