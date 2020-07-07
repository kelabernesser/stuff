import React, { useState, useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export default function Navbar(props){
    const { user } = useContext(UserContext)
    

    const { logout } = props
    return(
        <div>
            <Link className = "link" to ='/main'>Main</Link>
            <Link className = "link" to ='/maps'>Maps</Link>
            <button onClick = {logout}>Logout</button>
        </div>
    )

}