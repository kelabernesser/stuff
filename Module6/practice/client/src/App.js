import React, { useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth.js'
import Public from './components/Public.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { UserContext } from "../context/UserProvider.js";




function App() {
  const {token, logout} = useContext(UserContext)
  return (
    <div className="App">
      <Switch>
        <Route
          exact path = '/'
          render = {() => token ? <Redirect to = '/profile'/> : <Auth/>}
        />
        <ProtectedRoute
          path = '/public'
          component = {Public}
          redirect = '/'
          token = {token}
        />

      </Switch>
      
    </div>
  );
}

export default App;
