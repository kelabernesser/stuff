import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import ProtestProvider from './context/ProtestProvider.js'

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <ProtestProvider>
                <App />
            </ProtestProvider>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root')
)