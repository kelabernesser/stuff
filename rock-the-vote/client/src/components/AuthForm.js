import React from "react"
import styled from 'styled-components'

const FormBoxes = styled.div`

    & > form{
        display: flex;
        flex-direction: column;
        
    }

    & input{
        width: 100%;
        margin: auto;
        margin-top: 5px;
        margin-bottom: 15px;

        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px;

        font-size: 18px;
        font-weight: 300;

        background-color: black;

        color: #2e2e2e;
        outline: none;

        border: 1px solid #cccccc;

        border-radius: 15px;

        transition: 0.2s;
    }
    & input:hover{
        background-color: white;
    }
    & input:active{
        background-color: white;
    }
    & button{
        background-color: black;
        border-radius: 15px;
        outline: none;
        width: 100%;
        
        color: #C4C4C4;
        
        width: 100%;
        margin: auto;
        margin-top: 5px;
        margin-left: 15px;
        margin-bottom: 15px;

        
        padding-left: 15px;
        padding-right: 15px;

        font-size: 18px;
        font-weight: 200;
        
    }

    & button:hover {
        background-color: #f2f2f2;
        color: #2e2e2e;
        border: 1px solid #ffffff;
        box-shadow: 0px 8px 15px 0px #2e2e2e50;
    }

    & button:active {
        background-color: #e8e8e8;
        color: black;
        box-shadow: 0px 5px 15px 0px #2e2e2e75;
    }
    & p{
        font-size: 15px;
    }
    
`

export default function AuthForm(props){
    const{
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props

    return(
    <FormBoxes>
        <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                value = {username}
                name = "username"
                onChange = {handleChange}
                placeholder = "Username"/>
            <input
                type = "password"
                value = {password}
                name = "password"
                onChange = {handleChange}
                placeholder = "Password"/>
            <button>{ btnText }</button>
            <p style = {{color: "white"}}>{ errMsg }</p>
        </form>
        </FormBoxes>
    )
}