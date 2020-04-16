import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Main(props){
    return(
            <ThemeContextConsumer>
                {context => (
                    <main className = {`main-${context.theme}-theme`}>  
                        Toggle Me
                        <img src = "https://www.valimenta.com/wp-content/uploads/down-arrow-icon.png"/>
                    <button onClick = {context.toggleTheme} className = {`button-${context.theme}-theme`}><h1>Change Theme</h1></button>
                    </main>
                )}
            </ThemeContextConsumer>
            

    )
}
export default Main