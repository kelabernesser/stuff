import React from "react"
import { useHistory } from "react-router-dom"

function ResultsButton(props) {
    let history = useHistory()

    function handleClick() {
        history.push("/results", props.playerPoints)
    }
    return (
        <div>
            <button className = "quick-results" onClick={handleClick}>Check Out My Score</button>
        </div>
    )
}

export default ResultsButton