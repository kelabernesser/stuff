import React, { useState, useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import styled from 'styled-components'
import { ProtestContext } from "../context/ProtestProvider"

const MenuContainer = styled.div`

    display: flex;
    position: fixed;
    flex-direction: row;
    width: 100px;
    cursor: pointer;
    

`
const ActiveMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100vh;
    background-image: url("https://foreignpolicy.com/wp-content/uploads/2020/06/Bunche-MLK-Selma-march-UN-civil-rights-GettyImages-517388734.jpg?w=800&h=533&quality=90");
    background-repeat: none;
    background-size: cover;
    background-color: rgba(255,255,255,0.6);
    background-blend-mode: overlay;    
    margin: -10px;
    padding-left: 70px;
    box-shadow: 0px 20px 20px 0px #2e2e2e25;
    
    .link{
        text-decoration: none;
        color: #2e2e2e;
        font-size: 30px;
       
    }

    button{
        width: 150px;
        height: 40px;
        border-radius: 5px;
        margin-top: 400px;
        font-size: 30px;
        font-family: 'Rock Salt', cursive;
        outline: none;
        cursor: pointer;
    }


    .menu-icon{
        margin-left: 130px;
        cursor: pointer;
    }


`


export default function Navbar(props) {
    const { logout } = useContext(UserContext)
    const {getProtests} = useContext(ProtestContext)
    const [menuState, setMenuState] = useState(false)

    const menuToggle = () => {
        setMenuState(prev => !prev)
    }

    useEffect(() => {
        getProtests()
    }, [])


    // const { logout } = props
    return (
        <div>
            <MenuContainer>
                {menuState ? (
                    <div>
                        <ActiveMenu>
                        <div onClick={menuToggle} className="menu-icon">
                            <img style={{ width: "60px" }} src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronLeft-512.png" />
                        </div>

                            <Link className="link" to='/main'>Main</Link>
                            <Link className="link" to='/maps'>Maps</Link>
                            <button onClick={logout}>Logout</button>
                        </ActiveMenu>
                    </div>
                ) :
                    <div onClick={menuToggle}>
                        <img style={{ width: "60px" }} src="https://static.thenounproject.com/png/2168047-200.png" />
                    </div>}
            </MenuContainer>

        </div>
    )

}