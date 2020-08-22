import React from "react";
import { Route } from "react-router-dom";
import CreateClub from './CreateClub';
import CreateNews from './CreateNews';
import CreateEvents from './CreateEvents';
import Application from './Application';
import News from './News';
import Events from './Events';
import Gallery from './Gallery';
import Message from './Message';
import Logout from './Logout';
import Switch from "react-bootstrap/esm/Switch";

const PanelRouter = () => (
    <Switch>
        <Route exact path="/panel/create-club" component={CreateClub} />
        <Route exact path="/panel/create-news" component={CreateNews} />
        <Route exact path="/create-events" component={CreateEvents} />
        <Route exact path="/application" component={Application} />
        <Route exact path="/news" component={News} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/logout" component={Logout} />
    </Switch>
);

export default PanelRouter;