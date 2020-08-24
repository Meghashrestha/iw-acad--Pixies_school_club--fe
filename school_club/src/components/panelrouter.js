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
import '../css/main_body.css'

const PanelRouter = () => (
    <Switch>
        <section className='comp-body'>
        <Route exact path="/panel/create-club" component={CreateClub} />
        <Route exact path="/panel/create-news" component={CreateNews} />
        <Route exact path="/panel/create-events" component={CreateEvents} />
        <Route exact path="/panel/application" component={Application} />
        <Route exact path="/panel/news" component={News} />
        {/* <Route exact path="/panel/events" component={Events} /> */}
        <Route exact path="/panel/gallery" component={Gallery} />
        <Route exact path="/panel/message" component={Message} />
        <Route exact path="/panel/logout" component={Logout} />
        </section>
    </Switch>
);

export default PanelRouter;