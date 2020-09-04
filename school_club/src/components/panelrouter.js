import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from '../common/PrivateRoute'
import CreateClub from './CreateClub';
import CreateNews from './CreateNews';
import CreateEvents from './CreateEvents';
import Application from './Application';
import News from './News';
import Dashoard from './dashboard';
import Events from './Events';
import Gallery from './Gallery';
import Message from './Message';
import ViewApplication from './ViewApplication'
import Logout from './Logout';
import Switch from "react-bootstrap/esm/Switch";
import "../css/main_body.css";
import "../css/sub_body.css";
// import AddStaffs from "./AddStaffs";
import uploadGallery from "./UploadGallery";

import AddPresident from "./AddPresident";
import AddMembers from './AddMembers';
import ManagePresident from './ManagePresident';
import ManageMember from './ManageMember';
import Flags from './Flags';



const PanelRouter = () => (
    
    <Switch>
        <section className='comp-body'>
        <PrivateRoute exact path="/panel/dashboard" component={Dashoard}/>
        <PrivateRoute exact path="/panel/create-club" component={CreateClub}/>
        <PrivateRoute exact path="/panel/create-news" component={CreateNews} />
        <PrivateRoute exact path="/panel/create-events" component={CreateEvents} />
        <PrivateRoute exact path="/panel/add-president" component={AddPresident} />
        <PrivateRoute exact path="/panel/add-members" component={AddMembers} />
        <PrivateRoute exact path="/panel/flags" component={Flags} />
        <PrivateRoute exact path="/panel/application" component={Application} />
        <PrivateRoute exact path="/panel/news" component={News} />
        <PrivateRoute Route exact path="/panel/events" component={Events} />
        <PrivateRoute Route exact path="/panel/view-application" component={ViewApplication} />
        <PrivateRoute Route exact path="/panel/presidents" component={ManagePresident} />
        <PrivateRoute Route exact path="/panel/members" component={ManageMember} />
        <PrivateRoute exact path="/panel/message" component={Message} />

        <PrivateRoute exact path="/panel/logout" component={Logout} />
        <PrivateRoute exact path="/panel/upload-gallery" component={uploadGallery} />


        </section>
    </Switch>
);

export default PanelRouter;
