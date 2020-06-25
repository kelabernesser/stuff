import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { UserContext } from '../context/UserProvider'
import { IssueContext } from '../context/IssueProvider'


const NavContainer = styled.div`
   
    height: 20px;
    padding: 30px;
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #DF0202;
    transition: 0.2s; 
    box-shadow: 10px 10px 8px 10px #888888;
   

`



const LinkContainer = styled.div`
    width: 300px;
    
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 70px;
    border-radius: 15px;
    background-color: #f2f2f2;
    box-shadow: 0px 20px 20px 0px #2e2e2e25;
    border: 1px solid #ffffff;

    overflow: hidden;
    z-index: 1;

    & > a{
        flex:1;

        padding: 25px

        display: flex;
        align-items: center;
        justify-content: center;

        color: #2e2e2e;
        text-decoration: none;
        font-size: 30px;
        
    }

    & > a:hover{
        background-color: #ffffff;
        
    }

    & > a:active{
        background-color: #e8e8e8;
        color: black;
        
        
    }

    & > button{
        flex: 1;
        padding: 15px;

        width: 85%;
        margin: auto;
        margin-top: 15px;
        margin-bottom: 15px;

        border-radius: 40px;
        border: 1px solid black;
        box-shadow: 0px 20px 10px 0px #2e2e2e25;
        outline: none;

        font-size: 17px;
        font-weight: 500;
        cursor: pointer;

        background-color: blue;
        color: #f2f2f2;

        transition: 0.07s;

    }

    & > button:hover{
        background-color: #f2f2f2;
        color: #2e2e2e;
        border: 1px solid #ffffff;
        box-shadow: 0px 8px 15px 0px #2e2e2e50
    }
    & button:active{
        background-color: #e8e8e8;
        color: black;
        box-shadow: 0px 5px 15px 0px #2e2e2e75;
    }


`
const Username = styled.div`
    color: #2E2929;;
    position: relative;
    margin: auto;
    margin-right: 25px;
    cursor: pointer;
    

    display: flex;
    flex-direction: row;

    &:active {
        background-color: #2e2e2e50;
        transition: 0s;
    }

    & img{
        width: 30px;
        
    }
`


export default function Navbar(props) {
    const {voter} = useContext(UserContext)
    const {getIssue, getVoterIssues, issueState} = useContext(IssueContext)

    const [menuState, setMenuState] = useState(false)

    const menuSwitch = () => {
        setMenuState((prev) => !prev)
    }

    useEffect(() => {
        getVoterIssues()
    }, [])

    const { logout } = props
    return (
        <div>
        
            <NavContainer>
            <Username onClick={menuSwitch} >
                
                <img src = "https://cdn4.iconfinder.com/data/icons/website-library/32/hamburger_List_hamburger_right_menu_website-512.png"/>
                <h3>@{voter.username}</h3>
            </Username>
            {menuState ? (
                
               <React.Fragment>
                    <LinkContainer>
                    <Link className="link" to="/main">Main</Link>
                    <Link className="link" to='/profile'>Profile</Link>
                        <button onClick={logout}>Logout</button>
                    </LinkContainer>
                </React.Fragment> 
  
            ): null }
                

            </NavContainer>
            
        </div>
    )
}