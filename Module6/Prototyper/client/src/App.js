import React, { useContext } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom'
import { UserContext } from './context/UserProvider.js';

import Auth from './components/Auth.js'
import Main from './components/Main.js'
import Maps from './components/Map.js'
import ProtectedRoute from './components/ProtectedRoute.js'

function App() {
  const { token } = useContext(UserContext)
  return (
    <div className="App">
      <Switch>
        <Route
          exact path = '/'
          render = {() => token ? <Redirect to = "/main" /> : <Auth/>}
        />
        <ProtectedRoute
          path = '/main'
          component = {Main}
          redirectTo ='/'
          token={token}
        />
        <ProtectedRoute
          path = '/maps'
          component = {Maps}
          redirectTo ='/'
          token={token}
        />
        
      </Switch>
     
     
    </div>
  );
}

export default App;
