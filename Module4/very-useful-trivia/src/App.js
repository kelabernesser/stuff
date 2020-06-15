import React from 'react';
import './App.css';
import Main from "./Main"
import QuestionPrompt from './QuestionPrompt';
import Results from "./Results"
import {Switch, Route, Link} from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      
      <div className = "links">
            <Link className = "page-links" to="/">Main</Link>
            <Link className = "page-links" to="/questions">Get Started</Link>
            <Link className = "page-links" to = "/results" >Results</Link>
            
            <Switch>
                <Route exact path="/">
                    <Main  />
                </Route>
                <Route path = "/results" component = {Results}/>
                  
              
                <Route path="/questions" component = {QuestionPrompt}/>
                    
                
                
            </Switch>
        </div>

    </div>
  );
}

export default App;
