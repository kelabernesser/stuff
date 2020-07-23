import React, { useState, useContext } from "react"
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'
import styled from 'styled-components'

const WelcomeContainer = styled.div`
        background-color: #DF0202;
        display: flex;
        flex-direction: row;
        height: 100vh;
        
        align-items: center;
        padding-right: 100px; 
        padding-left: 100px;
        
        
        
  `
const TitleContainer = styled.div`
    display: flex;
    margin-right: 20px;
    font-size: 50px
`
const FormContainer = styled.div`
    display: flex;

    & > div{
        display: flex;
        flex-direction: column
    }
    & > img{
        margin-right: 50px;
        width: 250px;
    }
    p{
        margin: 0px;
        margin-left: 60px;
    }

    
`







const initInputs = { username: "", password: "" }


export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }
    function toggleForm() {
        setToggle(prev => !prev)
        resetAuthErr()
    }
    return (
        <div>
            <WelcomeContainer>
                <TitleContainer>
                    <h1>Rock The Vote</h1>
                </TitleContainer>
                <FormContainer>
                    <img src="https://static.thenounproject.com/png/16300-200.png" />

                    {!toggle ?
                        <>
                            <div>
                                <AuthForm
                                    handleChange={handleChange}
                                    handleSubmit={handleSignup}
                                    inputs={inputs}
                                    btnText="Sign up"
                                    errMsg={errMsg}
                                />

                                <p onClick={toggleForm}>Already a member</p>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <AuthForm
                                    handleChange={handleChange}
                                    handleSubmit={handleLogin}
                                    inputs={inputs}
                                    btnText="Login"
                                    errMsg={errMsg}
                                />

                                <p onClick={toggleForm}>Not a member?</p>
                            </div>
                        </>

                    }
                </FormContainer>

            </WelcomeContainer>
        </div>
    )
}