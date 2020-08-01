import React from 'react'
import styled from 'styled-components'

const size = {
    iphone5: '320px',
}
const device = {
    iphone5:`(max-width:${size.iphone5} )`,    
}

const FormStyle = styled.div`
    

    & > form{
        display: flex;
        flex-direction: column;
    }
    
    
    input{
        width: 300px;
        height: 15px;
        border-radius: 5px;
        border: 1px solid #878282;
        background-color: #878282;   
        color: rgb(26, 23, 23);
        box-shadow: 0px 8px 15px 0px #2e2e2e50;
        margin-bottom: 10px;
        outline: none;
        

        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 5px;
        padding-right: 5px;


    }

    button{
        width: 150px;
        height: 40px;
        border-radius: 5px;
        margin-left: 75px;
        font-family: 'Rock Salt', cursive;
    }

    p{
        margin-left: 30px;
        margin-bottom: -10px;
    }

    @media only screen and ${device.iphone5}{
        input{
            width: 250px;

        }
        button{
            margin-left: 50px;
        }
        p{
            margin-left: 10px;
        }

    }

    

    

   
`

export default function AuthForm(props){
    const{
        handleChange,
        handleSubmit, 
        btnText,
        errMsg,
        inputs:{
            username,
            password,
            imgUrl
        }
    } = props


    return(
        <FormStyle>
                        <p>{ errMsg }</p>

            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <input
                type="imgUrl"
                value={imgUrl}
                name="imgUrl"
                onChange={handleChange}
                placeholder="Profile Picture"
            />
            <button>{btnText}</button>
            </form>
        </FormStyle>
    )
}