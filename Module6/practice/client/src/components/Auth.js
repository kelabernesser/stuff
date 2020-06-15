import React, {useState, useContext} from 'react'
import { UserContext } from "../UserProvider"
import AuthForm from "./AuthForm.js"

const initInputs = { username: "", password: "" }

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login } = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(prev => !prev)
    }

    return(
        <div>
           <h1>Plants</h1> 
           {!toggle ? 
            <>
                <div>
                    <AuthForm
                        handleChange = {handleChange}
                        handleSubmit = {handleSignup}
                        inputs = {inputs}
                        btnText = "signup"
                    />
                    <p onClick = {toggleForm}>Already a member?</p>
                </div>
            </>
            :
            <>
                <div>
                    <AuthForm
                        handleChange = {handleChange}
                        handleSubmit = {handleLogin}
                        inputs ={inputs}
                        btnText = "login"
                    />
                <p onClick = {toggleForm}>Not a member?</p>
                </div>
            </>
           }
        </div>
    )
}
