import React from "react";


import "../css/main_body.css";
import "../css/sub_body.css";
import PrivateRoute from "../common/PrivateRoute";
import CreateClub from "./CreateClub";
import CreateNews from "./CreateNews";
import CreateEvents from "./CreateEvents";
import Application from "./Application";
import News from "./News";
import Events from "./Events";
import Message from "./Message";
import ViewMessage from "./ViewMessage";
import ViewApplication from "./ViewApplication";
import Logout from "./Logout";
import Switch from "react-bootstrap/esm/Switch";
import uploadGallery from "./UploadGallery";
import Dashboard from "./dashboard";
import AddPresident from "./AddPresident";
import AddMembers from "./AddMembers";
import ManagePresident from "./ManagePresident";
import ManageMember from "./ManageMember";
import Flags from "./Flags";
import DeleteUser from "./DeleteUser";
import DeleteClub from "./DeleteClub";

const PanelRouter = () => (
  <Switch>
    <section className="comp-body">
      <PrivateRoute exact path="/panel/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/panel/create-club" component={CreateClub} />
      <PrivateRoute exact path="/panel/create-news" component={CreateNews} />
      <PrivateRoute
        exact
        path="/panel/create-events"
        component={CreateEvents}
      />
      <PrivateRoute
        exact
        path="/panel/add-president"
        component={AddPresident}
      />
      <PrivateRoute exact path="/panel/add-members" component={AddMembers} />
      <PrivateRoute exact path="/panel/flags" component={Flags} />
      <PrivateRoute exact path="/panel/application" component={Application} />
      <PrivateRoute exact path="/panel/news" component={News} />
      <PrivateRoute Route exact path="/panel/events" component={Events} />
      <PrivateRoute
        Route
        exact
        path="/panel/view-application"
        component={ViewApplication}
      />
      <PrivateRoute
        Route
        exact
        path="/panel/presidents"
        component={ManagePresident}
      />
      <PrivateRoute
        Route
        exact
        path="/panel/members"
        component={ManageMember}
      />
      <PrivateRoute exact path="/panel/message" component={Message} />
      <PrivateRoute exact path="/panel/view-message" component={ViewMessage} />

      <PrivateRoute exact path="/panel/delete-user" component={DeleteUser} />
      <PrivateRoute exact path="/panel/delete-club" component={DeleteClub} />

      <PrivateRoute exact path="/panel/logout" component={Logout} />
      <PrivateRoute
        exact
        path="/panel/upload-gallery"
        component={uploadGallery}
      />
    </section>
  </Switch>
);

export default PanelRouter;
