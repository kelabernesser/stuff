import React from "react"
import { ThemeContextConsumer } from "./themeContext"


function NavBar(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <nav className ={`navBar-${context.theme}-theme`}>
                    <h3>About</h3>
                    <h3>Home</h3>
                    <h3>Contact</h3>
                </nav>
             )}
        </ThemeContextConsumer>
    )
}

export default NavBar