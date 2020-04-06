import React from "react"

function hitComponent(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src = {props.image}/>
        </div>
    )
}

export default hitComponent 