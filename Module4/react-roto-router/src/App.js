import React from 'react';
import './App.css';
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App() {
  return (
    <div className="App">
      <nav>
        <Link className = "links" to = "/">Home</Link>
        <Link className = "links" to = "/about">About</Link>
        <Link className = "links" to = "/services">Services</Link>
      </nav>

      <Switch>
        <Route exact path = "/"><Home/></Route>
        <Route exact path = "/about"><About/></Route>
        <Route path = "/services"><Services/></Route>
      </Switch>
      <footer>This is my footer</footer>
    
    </div>
  );
}

export default App;
