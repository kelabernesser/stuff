import React from 'react';
import './App.css';
import Die from "./Dice"


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      randomNumber :  0,
      randomNumber1 :  0,
      randomNumber2 :  0,
      randomNumber3 :  0,
      randomNumber4 :  0,
    
    }
    this.rollAgain = this.rollAgain.bind(this)
    this.holdDice = this.holdDice.bind(this)
  }
  rollAgain(){
    this.setState(() => {
      
      
      return{
        randomNumber :  Math.floor(Math.random() * 7),
        randomNumber1 :   Math.floor(Math.random() * 7),
        randomNumber2 :   Math.floor(Math.random() * 7),
        randomNumber3 :   Math.floor(Math.random() * 7),
        randomNumber4 :   Math.floor(Math.random() * 7),
        

      }
      
    })
  }
  holdDice(){
   this.setState((prevState) => {
      return{
        randomNumber: prevState.randomNumber
        
      }     
   })
  }

 
      
   
  
  
  render(){
    return(
      <div>
        <div>{this.state.randomNumber}</div>
        <div>{this.state.randomNumber1}</div>
        <div>{this.state.randomNumber2}</div>
        <div>{this.state.randomNumber3}</div>
        <div>{this.state.randomNumber4}</div>
        <button onClick = {this.rollAgain}>Roll Again!</button>

        <Die  handleClick = {this.holdDice} number = {this.state.randomNumber}/>
        <Die  number = {this.state.randomNumber1}/>
        <Die  number = {this.state.randomNumber2}/>
        <Die  number = {this.state.randomNumber3}/>
        <Die  number = {this.state.randomNumber4}/>
        
      </div>
    )
  }
}

export default App;
