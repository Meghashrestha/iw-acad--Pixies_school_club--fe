import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Auth from "./Auth";
import Des from "./Des";
import Event from "./components/Event/Event";
import Panel from "./components/panel";
import PanelRouter from './components/panelrouter';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)

    }
    fetchItems()

  
  }, [])



  return (
    <Router>
      <Switch>
        <Route path="/clubs/description">
          {/* <Navbar/> */}
          <Des />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Navbar />
          <Routes />
          {/* <Event isLoading={isLoading} items={items} /> */}
          <Footer />
        </Route>
        <Route path='/panel'>
          <Panel/>
          <PanelRouter/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
