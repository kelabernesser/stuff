import React from "react"
import vacationData from "./vacationSpots"
import Spot from "./Spot"

function App(){
  const spotComponent = vacationData.map(function(spot){
    return <Spot key = {spot.id} spot = {spot}/>
  }) 

  

  return(
    <div >
        {spotComponent}
    </div>
  )
}

export default App