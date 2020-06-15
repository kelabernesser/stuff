import React, {useContext} from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from "./components/Navbar.js"
import Auth from './components/Auth.js'
import Main from './components/Main.js'
import Profile from "./components/Profile.js"
import Public from './components/Public.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import {UserContext} from "./context/UserProvider.js"

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className="App">
      { token && <Navbar logout = {logout}/>}
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
          path = '/profile'
          component = {Profile}
          redirectTo ='/'
          token={token}
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
