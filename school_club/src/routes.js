import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Clubs from "./components/Clubs";
import Gallery from "./components/Gallery";
import MyClubs from "./components/MyClubs";
import About from "./components/About";
import description from "./components/Club_description";


const Routes = () => (
  <div>
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/" component={Home} />
    <Route exact path="/clubs" component={Clubs} />
    <Route exact path="/my-club" component={MyClubs} />
    <Route exact path="/about" component={About} />
    <Route exact path="/clubs/description" component={description} />
    
    
  </div>
);

export default Routes;
