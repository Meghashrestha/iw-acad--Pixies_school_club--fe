import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Auth from "./Auth";
import Des from "./Des";
import { Provider } from "react-redux";
import { store } from "./store";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "./actions/auth";

import MainBody from "./components/MainBody";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/clubs/description">
              <Des />
            </Route>
            <Route path="/login">
              <Auth />
            </Route>

            <PrivateRoute path="/panel" component={MainBody} />

            <Route path="/">
              <Navbar />
              <div className="overflow-hidden">
                <Routes />
              </div>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
