import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Auth from "./Auth";
import Des from "./Des";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/clubs/description">
          {/* <Navbar/> */}
          <Des />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Navbar />
          <Routes />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
