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
   
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 
  
  handleChange = (e) => {
    const { name, value} = e.target
    this.setState(prevState => ({
      badge: { ...prevState.badge, [name]: value },
      
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
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
    let {firstName, lastName, email, placeOfBirth, phone, favoriteFood, aboutYou} = this.state.badge
    return (
      <main className = "App">
        <h1 className = "title">[Name-Badge]</h1>
        <form 
          className="form"
          onSubmit={this.handleSubmit}
        >
          <input
            className="normalInput"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleChange}
            name="firstName"
            minLength={3}
            required
            />
          <input
            className="normalInput"
            placeholder="Last Name"
            value={lastName}
            name="lastName"
            onChange={this.handleChange}
            minLength={3} 
            required/>
          <input
            className="normalInput"
            placeholder="email"
            value={email}
            name="email"
            onChange={this.handleChange} 
            minLength={3}
            required/>
          <input
            className = "normalInput"
            placeholder = "Place of Birth"
            value = {placeOfBirth}
            name = "placeOfBirth"
            onChange = {this.handleChange}
            minLength={3}
            required
            />
          <input
            className = "normalInput"
            placeholder = "phone"
            type = "number"
            value = {phone}
            name = "phone"
            onChange = {this.handleChange}
            minLength={3}
            required
            />
            
          <input
            className = "normalInput"
            placeholder = "Favorite Food"
            value = {favoriteFood}
            name = "favoriteFood"
            onChange = {this.handleChange}
            minLength={3}
            required/>
          <textarea
            className = "bigInput"
            placeholder= "Tell us about yourself"
            value = {aboutYou}
            name = "aboutYou"
            onChange = {this.handleChange}
            minLength={3}
            required
          />

          <button
            className="submitButton"
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
