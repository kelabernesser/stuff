import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props){
    return(
        <ThemeContextConsumer>
            {context => (
                <footer className = {`footer-${context.theme}-theme`}>
                    <h3>FOOTER</h3>
                </footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer