import React from 'react';
import './App.css';
import Badge from "./Badge"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      badge: {
        firstName: "",
        lastName: "",
        placeOfBirth: "",
        email: "",
        phone: "",
        favoriteFood: "",
        aboutYou: ""
      },
      badgeArr: [],
      disabled : true

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 /* clearInputs = () =>{
    this.setState({
      badge: {
        firstName: "",
        lastName: "",
        placeOfBirth: "",
        email: "",
        phone: "",
        favoriteFood: "",
        aboutYou: ""
      }
    })
  }*/
  
 
  
  handleChange(e) {
    e.preventDefault()
    const { name, value} = e.target
    this.setState(prevState => ({
      badge: { ...prevState.badge, [name]: value },
      
    }))
  }
  handleSubmit(e) {
    e.preventDefault()
    const { name, value} = e.target
   

      this.setState(prevState => ({
        badge : {
          firstName: "",
          lastName: "",
          placeOfBirth: "",
          email: "",
          phone: "",
          favoriteFood: "",
          aboutYou: ""
        },
        badgeArr: [...prevState.badgeArr, prevState.badge],
        
        
  
      }))
      
    
  }
  render() {
    return (
      <main>
        <form 
          className="form"
          onSubmit={this.handleSubmit}
        >
          <input
            className="normalInput"
            placeholder="First Name"
            value={this.state.badge.firstName}
            onChange={this.handleChange}
            name="firstName"
            minLength={3}
            required
            />
          <input
            className="normalInput"
            placeholder="Last Name"
            value={this.state.badge.lastName}
            name="lastName"
            onChange={this.handleChange}
            minLength={3} 
            required/>
          <input
            className="normalInput"
            placeholder="email"
            value={this.state.badge.email}
            name="email"
            onChange={this.handleChange} 
            minLength={3}
            required/>
          <input
            className = "normalInput"
            placeholder = "Place of Birth"
            value = {this.state.badge.placeOfBirth}
            name = "placeOfBirth"
            onChange = {this.handleChange}
            minLength={3}
            required
            />
          <input
            className = "normalInput"
            placeholder = "phone"
            type = "number"
            value = {this.state.badge.phone}
            name = "phone"
            onChange = {this.handleChange}
            minLength={3}
            required
            />
            
          <input
            className = "normalInput"
            placeholder = "Favorite Food"
            value = {this.state.badge.favoriteFood}
            name = "favoriteFood"
            onChange = {this.handleChange}
            minLength={3}
            required/>
          <textarea
            className = "bigInput"
            placeholder= "Tell us about yourself"
            value = {this.state.badge.aboutYou}
            name = "aboutYou"
            onChange = {this.handleChange}
            minLength={3}
            required
          />

          <button
            className="submitButton"
            disabled = {this.state.disabled}
          >Submit
          </button>
        </form>
        <div>
          <Badge badgeArr={this.state.badgeArr} />
        </div>

      </main>
    )

  }


}

export default App;
