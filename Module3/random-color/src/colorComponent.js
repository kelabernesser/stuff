import React from "react"

function colorComponent(props){

    const backgroundStyle = {
        backgroundColor : props.color,
        width: "100%",
        height: "820px"
    }

    return(
        <div style = {backgroundStyle}>{props.color}</div>
    )
}

export default colorComponent