import React from "react";
import { Route } from "react-router-dom";

import description from "./components/Club_description";



const Des = () => (
  <div>
    <Route exact path="/clubs/description" component={description} />
  </div>
);

export default Des;
