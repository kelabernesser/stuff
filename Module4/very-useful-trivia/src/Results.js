import React from "react"
import { useHistory } from "react-router-dom"

function Results(){
  let history = useHistory()

  const playerScore = history.location.state
    
    return(
        <div className = "results-page">
            <h1>Results</h1>
            <h2 className = "points1">Total Points: {playerScore} </h2>
            
        </div>
    )
}

export default Results