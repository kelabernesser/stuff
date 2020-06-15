import React, {useContext} from 'react'
import { UserContext } from "../UserProvider.js"

export default function Public(){
    const{
        voter: {username},
    } = useContext(UserContext)
return(
    <div>
        <h1>{username}</h1>
    </div>
)

}