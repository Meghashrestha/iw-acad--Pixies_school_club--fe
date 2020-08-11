import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Clubs from "./components/Clubs";
import Gallery from "./components/Gallery";
import MyClubs from "./components/MyClubs";

const Routes = () => (
  <div>
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/about" component={Home} />
    <Route exact path="/clubs" component={Clubs} />
    <Route exact path="/my-club" component={MyClubs} />
  </div>
);

export default Routes;
