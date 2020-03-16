import React from "react"

function navBar() {
    const containerStyles = {
       display: "flex",
       alignItems: "center",
       justifyContent: "space-between",
       backgroundColor: "white",
       position: "relative",
       padding: "6px 70px"

    }
    const startStyles = {
        textDecoration: "none",
        color: "black",
        fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontWeight: "800",
        fontSize: "1.25rem", 
    }
    const menuStyles = {
        fontSize: "12px",
        fontWeight: "800",
        borderColor: "rgba(0,0,0,.1)",
        padding: "13px",
        borderRadius: ".25rem"
    }
   
    return (
        <div style={containerStyles}>
            <a style={startStyles} href="index.html">Start Bootstrap</a>
            <button style = {menuStyles}>MENU</button>
        </div>
    )
}

export default navBar