import React from "react";
import { Route } from "react-router-dom";
import CreateClub from './create_club';

const PanelRouter = () => (
    <div>
        <Route exact path="/create-club" component={CreateClub} />
        {/* <Route exact path="/create-news" component={CreateNews} />
        <Route exact path="/create-events" component={CreateEvents} />
        <Route exact path="/application" component={Application} />
        <Route exact path="/news" component={News} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/logout" component={Logout} /> */}
    </div>
);

export default PanelRouter;