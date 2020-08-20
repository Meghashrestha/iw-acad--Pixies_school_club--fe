import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Panel from "./components/panel";
import PanelRouter from './components/panelrouter';
import CreateClub from "./components/CreateClub";
import CreateNews from "./components/CreateNews";


const App2 = () => {

  return (
    <Router>
      <Switch>
        <Route path="/panel/create-club">
          <Panel/>
          <CreateClub />
          <PanelRouter/>
        </Route>
        <Route path="/panel/create-news">
          <Panel/>
          <CreateNews />
        </Route>
        
      </Switch>
    </Router>
  );
};
export default App2;
