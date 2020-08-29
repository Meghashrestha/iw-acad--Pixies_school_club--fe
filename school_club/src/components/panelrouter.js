import React from "react";
import { Route } from "react-router-dom";
import CreateClub from "./DashboardComponents/CreateClub";
import CreateNews from "./DashboardComponents/CreateNews";
import CreateEvents from "./DashboardComponents/CreateEvents";
import Application from "./DashboardComponents/Application";
import News from "./DashboardComponents/News";
import Events from "./DashboardComponents/Events";
// import Gallery from "./DashboardComponents/Gallery";
import Message from "./DashboardComponents/Message";
import Logout from "./AuthComponents/Logout";
import Switch from "react-bootstrap/esm/Switch";
import "../css/main_body.css";
import "../css/sub_body.css";

const PanelRouter = () => (
  <Switch>
    <section className="comp-body">
      <Route exact path="/panel/create-club" component={CreateClub} />
      <Route exact path="/panel/create-news" component={CreateNews} />
      <Route exact path="/panel/create-events" component={CreateEvents} />
      <Route exact path="/panel/application" component={Application} />
      <Route exact path="/panel/news" component={News} />
      {/* <Route exact path="/panel/events" component={Events} /> */}
      <Route exact path="/panel/message" component={Message} />
      <Route exact path="/panel/logout" component={Logout} />
    </section>
  </Switch>
);

export default PanelRouter;
