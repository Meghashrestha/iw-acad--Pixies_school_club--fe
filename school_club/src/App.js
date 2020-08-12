import React , { useState , useEffect} from "react";
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from './routes';
import "./App.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Gallery from './components/Gallery';


const App = () => {
  //eslint-disable-next-line
 const [items, setItems] = useState([])
 //eslint-disable-next-line
 const [isLoading,setIsLoading] = useState(true)

useEffect(()=>{
  const fetchItems = async()=>{
    const result = await axios(`http://127.0.0.1:8000/clubs/`)
    console.log(result.data)
    setItems(result.data)
    setIsLoading(false)
  }
  fetchItems()
}, [])

    return (
      <Router>
        <Switch>
          <Route path="/">
              <Navigation/>
              <Gallery/>
              <Footer/>
              <Routes/>
          </Route>
        </Switch>
    </Router>
    );
  
}
export default App;
