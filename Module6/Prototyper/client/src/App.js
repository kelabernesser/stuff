import React, { useContext } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import './App.css';
import { UserContext } from './context/UserProvider';

import Auth from './components/Auth.js'
import Main from './components/Main.js'
import Map from './components/Map.js'

function App() {
  const {token} = useContext(UserContext)
  return (
    <div className="App">
     <Switch>
        <Route
          exact path = '/'
          render={() => <Auth/>}
        />
        <Route
          path = '/main'
          render={() => <Main/>}
        />
        <Route
          path = '/map'
          render={() => <Map/>}
        />
       </Switch> 
    </div>
  );
}

export default App;
