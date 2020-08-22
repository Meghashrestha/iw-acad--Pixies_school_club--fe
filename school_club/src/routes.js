import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Clubs from "./components/Clubs";
import Gallery from "./components/Gallery";
// import MyClubs from "./components/MyClubs";
import About from "./components/About";

import ContactForm from "./components/ContactForm";
=======
import Panel from "./components/Panel";


const Routes = () => (
  <div>
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/" component={Home} />
    <Route exact path="/clubs" component={Clubs} />
    <Route exact path="/my-clubs" component={ContactForm} />
    <Route exact path="/about" component={About} />
    <Route exact path="/panel" component={Panel} />

  </div>
);

export default Routes;
