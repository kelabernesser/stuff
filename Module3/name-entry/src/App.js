import React from "react"
import NameEntries from "./nameEntries"

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      inputBox: "",
      nameList: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    const newName = [this.state.nameList]
    newName.push(this.state.inputBox)
    this.setState({
      nameList : newName,
      inputBox: ""
    })
  }
  handleChange(e){
    e.preventDefault()
    this.setState({
      inputBox : e.target.value
    })

  }

  render(){
    return(
      <main>
        <form>
          <input
            name = "inputBox"
            value = {this.state.inputBox}
            onChange = {this.handleChange}
            placeholder = "Enter Name Here"
          />
        </form>
        <NameEntries nameList = {this.state.nameList}/>
      <button onClick = {this.handleSubmit}>Submit Name</button>
      </main>
    )
  }
}

export default App