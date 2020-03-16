import React from 'react'



function Header(){
    const styles = {
        color : "red",
        fontSize : "200px",
        backgroundColor : "blue" 
        
    }
    return(
        <header>
            <h1 style = {styles}>I Like Icecream</h1>
        </header>
    )
}

export default Header