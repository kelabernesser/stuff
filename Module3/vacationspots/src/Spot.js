import React from "react"


function Spot(props){
    const styles = {}
    if(props.spot.timeToGo === "Summer"){
        styles.backgroundColor = "yellow"
    }
    else if(props.spot.timeToGo === "Spring"){
        styles.backgroundColor = "pink"
    }
    else if(props.spot.timeToGo === "Fall"){
        styles.backgroundColor = "orange"
    }
    else if(props.spot.timeToGo === "Winter"){
        styles.backgroundColor = "lightBlue"
    }

    return(
        <div style={styles}>
            <h2>{props.spot.place}</h2>
            <p>${props.spot.price} - {props.spot.timeToGo}</p>
            <br/>
        </div>
    )
}

export default Spot