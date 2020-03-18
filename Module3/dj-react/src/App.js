import React from "react"
import Square from "./Square"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      colors: ["white","white","white","white"]
    }
    this.blackAndWhiteCookie = this.blackAndWhiteCookie.bind(this)
    this.changeToPurple = this.changeToPurple.bind(this)
    this.blueLeft = this.blueLeft.bind(this)
    this.blueRight = this.blueRight.bind(this)
    this.topLeftButton = this.topLeftButton.bind(this)
    this.topRightButton = this.topRightButton.bind(this)
    this.bottomLeftButton = this.bottomLeftButton.bind(this)
    this.bottomRightButton = this.bottomRightButton.bind(this)
  }
  
  
  blackAndWhiteCookie(){
    const audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
    audio.play()
    this.setState(prevState => {
      if(this.state.colors[0] === "white" || this.state.colors[0] === "purple" || this.state.colors[0] === "yellow"  ){
        return {
          colors : prevState.colors = ["black", "black", "black", "black"]
        }
      }
      if (this.state.colors[0] === "black" || this.state.colors[0] === "purple"){
        return{
          colors : prevState.colors = ["white","white","white","white"]
        }

      }
    })
  }


  changeToPurple(){
    const audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
    audio.play()
    this.setState(prevState => {
      return{
        colors : prevState.colors = ["purple", "purple", this.state.colors[2], this.state.colors[3]]
      }
    })
  }

  blueLeft(){
    const audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
    audio.play()
    this.setState(prevState => {
      return{
        colors: prevState.colors = [this.state.colors[0], this.state.colors[1], "blue", this.state.colors[3]]
      }
    })
  }

  blueRight(){
    const audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
    audio.play()
    this.setState(prevState => {
      return{
        colors: prevState.colors = [this.state.colors[0], this.state.colors[1], this.state.colors[2], "blue"]
      }
    })
  }

  topLeftButton(){
    const audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
    audio.play()
    this.setState(prevState => {
      return{
        colors: prevState.colors = ["yellow",this.state.colors[1],this.state.colors[2],this.state.colors[3] ]
      }
    })
  }
  topRightButton(){
    const audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
    audio.play()
    this.setState(prevState => {
      return{
        colors: prevState.colors = [this.state.colors[0], "hotPink",this.state.colors[2],this.state.colors[3] ]
      }
    })
  }
  bottomLeftButton(){
    const audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
    audio.play()
    this.setState(prevState => {
      return{
        colors: prevState.colors = [this.state.colors[0],this.state.colors[1],"orange",this.state.colors[3] ]
      }
    })
  }
  bottomRightButton(){
    const audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
    audio.play()
    this.setState(prevState => {
      return{
        colors: prevState.colors = [this.state.colors[0],this.state.colors[1],this.state.colors[2],"lightGreen" ]
      }
    })
  }
  
  

  render() {
    const crazyGrid = {
      width : "100%",
      fontSize: "20px",
      border: "1px solid white",
      color: "white",
      backgroundColor: "black",
      
    }
    const grid = {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gridTemplateRows: "repeat(2,1fr)",
      
    }
    const buttonStyle = {
      width: "100%",
      fontSize: "20px",
      border: "1px solid black"
    }
    const purpleButton = {
      width: "100%",
      fontSize: "20px",
      border: "1px solid black",
      backgroundColor : "purple"
    }
    const blueLeftStyle = {
      width: "50%",
      fontSize: "20px",
      border: "1px solid black",
      backgroundColor: "blue"
    }
    const blueRightStyle = {
      width: "50%",
      fontSize: "20px",
      border: "1px solid black",
      backgroundColor: "lightBlue"
    }
    const topLeftStyle = {
      width: "25%",
      fontSize: "20px",
      border: "1px solid black",
      backgroundColor: "yellow"
    }
    const topRightStyle= {
      width: "25%",
      fontSize: "20px",
      border: "1px solid black",
      backgroundColor: "hotPink"
    }
    const bottomLeftStyle = {
      width: "25%",
      fontSize: "20px",
      border: "1px solid black",
      backgroundColor: "orange"
    }
    const bottomRightStyle = {
      width: "25%",
      fontSize: "20px",
      border: "1px solid black",
      backgroundColor: "lightGreen"
    }
    return (
      <div>
        
        <button style = {crazyGrid}>DJ GOT US FALLIN INLOVE AGAIN</button>
        
        <div style = {grid}>
        <Square color = {this.state.colors[0]}/>
        <Square color = {this.state.colors[1]}/>
        <Square color = {this.state.colors[2]}/>
        <Square color = {this.state.colors[3]}/>
      </div>
      <button onClick = {this.blackAndWhiteCookie} style = {buttonStyle}>BLACK AND WHITE COOKIE</button>
      
      <button onClick = {this.changeToPurple} style = {purpleButton} >PURPLE NURPLE</button>
      
      <button onClick = {this.blueLeft} style = {blueLeftStyle}>LEFT BLUE</button>
      <button onClick = {this.blueRight} style = {blueRightStyle}>BOOGIE SHOES</button>

      <button onClick = {this.topLeftButton} style = {topLeftStyle}>TOP GUN</button>
      <button onClick = {this.topRightButton} style = {topRightStyle}>RIGHTY TIGHTY</button>
      <button onClick = {this.bottomLeftButton} style = {bottomLeftStyle}>LEFTY LOOSY</button>
      <button onClick = {this.bottomRightButton} style = {bottomRightStyle}>BOTTOM BABY</button>
      </div>
  

    )
  }
}

export default App