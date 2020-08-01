import React, { useContext, useState } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'
import styled from 'styled-components'

const size = {
    motoG4 : '360px',
    tablet : '768px'
}
const device = {
    motoG4 : `(max-width:${size.motoG4} )`,
    tablet : `(max-width:${size.tablet} )`,
    
}


const AuthPage = styled.div`

    background-image: url("https://gritdaily.com/wp-content/uploads/2020/06/nicole-baster-6_y5Sww0-h4-unsplash-1-1280x768-1.jpg");
    background-repeat: none;
    background-size: cover;
    background-color: rgba(255,255,255,0.6);
    background-blend-mode: overlay;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: -10px;
    align-item: center;
    justify-content: center;
    
    h1{
        margin-left: 940px;
        font-size: 50px;
    }

    @media only screen and ${device.tablet}{
        h1{
            margin-left: 225px;
        }
    }
    @media only screen and ${device.motoG4}{
        h1{
            margin-left: 80px;
            margin-top: 200px;
            font-size: 30px;

        }
    }
    
    
    
`
const FormContainer = styled.div`
    margin-left: 950px;
    margin-bottom: 450px;
    

    & > p{
        
        color: white;
    }
    @media only screen and ${device.tablet}{
        margin-left: 225px;
    }
    @media only screen and ${device.motoG4}{
        margin-left: 25px;    
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
            <AuthPage>
                <h1>Prototype</h1>
                
                {!toggle ?
                    <>
                        <FormContainer>
                            <AuthForm
                                handleChange={handleChange}
                                handleSubmit={handleSignup}
                                inputs={inputs}
                                btnText="Sign up"
                                errMsg={errMsg}
                            />

                            <p style = {{marginLeft: "65px"}} onClick={toggleForm}>Already a member?</p>
                        </FormContainer>
                    </>
                    :
                    <>
                        <FormContainer>
                            <AuthForm
                                handleChange={handleChange}
                                handleSubmit={handleLogin}
                                inputs={inputs}
                                btnText="Login"
                                errMsg={errMsg}
                            />

                            <p style = {{marginLeft: "80px"}} onClick={toggleForm}>Not a member?</p>
                        </FormContainer>
                    </>

                }
                
            </AuthPage>
        </div>
    )
}