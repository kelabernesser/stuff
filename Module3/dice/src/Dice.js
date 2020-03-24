import React from "react"

class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    /*holdDice(){
        this.setState(prevState => {
            return{
                number = this.props.number + 1
            }
        })
    }*/
  
    render() {
        
        return (
            <button onClick = {this.props.handleClick}>
                {this.props.number}
            </button>

        )

    }


    
}

export default DiceBox