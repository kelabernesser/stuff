import React from "react"
import ColorComponent from "./colorComponent"

const axios = require("axios")

class RandomColor extends React.Component{
    constructor(){
        super()
        this.state = {
            colors: [],
            myColor: ""
        }
    }

    componentDidMount(){
        //saving my array of color objects in state
        axios.get("https://vschool-cors.herokuapp.com?url=http://www.colr.org/json/color/random") 
        .then((data) =>{
            
            this.setState({
                color: `#${data.data.colors[0].hex}`
            })
            
        })
        
    }
    

    
    
    render() {
        return(
     <ColorComponent color = {this.state.color}/>
        )
        }
}

export default RandomColor