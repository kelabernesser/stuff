import React from "react"

function Pet(props){
    return(
        <div>
            <ul>{props.petName} - {props.petBreed} </ul>
        </div>
    )
}

export default Pet