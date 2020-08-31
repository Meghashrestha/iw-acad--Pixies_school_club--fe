import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from '../common/PrivateRoute'
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
import "../css/main_body.css";
import "../css/sub_body.css";

const PanelRouter = () => (
    <Switch>
        <section className='comp-body'>
        <PrivateRoute exact path="/panel/create-club" component={CreateClub}/>
        <PrivateRoute exact path="/panel/create-news" component={CreateNews} />
        <PrivateRoute exact path="/panel/create-events" component={CreateEvents} />
        <PrivateRoute exact path="/panel/application" component={Application} />
        <PrivateRoute exact path="/panel/news" component={News} />
        <Route exact path="/panel/events" component={Events} />
        <PrivateRoute exact path="/panel/message" component={Message} />
        <PrivateRoute exact path="/panel/logout" component={Logout} />
        </section>
    </Switch>
);

export default PanelRouter;
