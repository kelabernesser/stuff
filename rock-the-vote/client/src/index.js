import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from "./context/UserProvider.js"
import IssueProvider from './context/IssueProvider.js'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <IssueProvider>
      <App/>
      </IssueProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


