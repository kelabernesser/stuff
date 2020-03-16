import React from "react"
import Pet from "./pet"

function Friend(props){

    const styles = {
        backgroundColor : "lightBlue",
        color: "darkBlue",
        border : "10px solid green",
        display: "flex"
    }

    const petComponent = props.pets.map(function(pet){
    return <Pet key = {pet.id} petName = {pet.name} petBreed = {pet.breed}/>
    })
    return(
        <div style = {styles}>
            <h1 >{props.name} - {props.age}</h1>
            {petComponent}
        </div>
    )
}

export default Friend
