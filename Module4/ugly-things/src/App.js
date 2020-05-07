import React from 'react';
import './App.css';
import { UglyContextConsumer } from "./uglyContext"
import Container from "./Container"

class App extends React.Component {
  state = {
    newTitle: "",
    newDescription: "",
    newImg: "",
    count: "",
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => {
      return{
        [name]: value,
      }
    })
  }
  render() {
    
    return (
      <div className = "whole-page">
        <UglyContextConsumer>
          {({ uglyArr, submitArr, deleteArr, editArr}) => (
            <main>
              <h1 className = "page-title">add an ugly</h1>
            <div className = "inputContainer">
              <input
              className = "inputs"
                type="text"
                name="newTitle"
                placeholder="New Title"
                value={this.state.newTitle}
                onChange={this.handleChange}
              />
              <input
                className = "inputs"
                type = "text"
                name = "newDescription"
                placeholder = "New Description"
                value = {this.state.newDescription}
                onChange = {this.handleChange}
              />
              <input
                className = "inputs"
                type = "type"
                name = "newImg"
                placeholder = "New ImgUrl"
                value = {this.state.newImg}
                onChange = {this.handleChange}
              />
            
              <button className = "add-ugly" onClick={() => submitArr(this.state.newTitle, this.state.newDescription, this.state.newImg)}>+</button>
            </div>
              <Container uglyArr = {uglyArr} deleteMethod = {deleteArr} editMethod = {editArr}/>
              
            </main>
          )}
        </UglyContextConsumer>
      </div>

    )
  }
}

export default App;
