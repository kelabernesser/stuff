import React from 'react'

//logged in users to add new posts
export default function IssueFinal(props){
    const {title, description} = props
 return(
     <div>
         <h1>{title}</h1>
         <h2>{description}</h2>
    </div>  
 )
}