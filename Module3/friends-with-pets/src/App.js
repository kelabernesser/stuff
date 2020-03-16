import React from "react"
import Friend from "./friend"
import friendData from "./friendList"


function App(){
 
  const friendComponent = friendData.map(function(friend){
  return(
    <Friend 
      key = {friend.id}
      name = {friend.name} 
      age = {friend.age} 
      pets = {friend.pets}
    />

  )     
  }) 

  return(
    <div >
        {friendComponent}   
    </div>
  )
}

export default App