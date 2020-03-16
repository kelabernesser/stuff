import React from "react"
import NavBar from "./navBar"

function Header() {
    
    const headerStyles = {
        height: "550px",
        width: "100%",
        backgroundImage: "url('https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg')",
        backgroundColor: "#868e96",
        backgroundSize: "cover",
        position: "relative",
        marginBottom: "50px"
    }


    const overlay = {
        position: "absolute",
        top: "0",
        bottom: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "#212529",
        opacity: ".5"

    }
    
    const siteTitleStyles = {
        position:"relative",
        fontSize: "80px",
        color: "white",
        fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
        marginLeft : "14rem",
        marginTop: "11rem",
        marginBottom: "0"
    }
    const subTitleStyles = {
        position:"relative",
        fontSize: "24px",
        fontWeight: "300",
        color: "white",
        fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
        marginLeft : "17rem",
        marginTop: "10px"

    }


    return (
    <div>
        <header style={headerStyles}>
            <div style={overlay}></div>
            <NavBar/>
            <div >
                <h1 style={siteTitleStyles}>Clean Blog</h1>
                <p style = {subTitleStyles}>A Blog Theme By Start Bootstrap</p>
            </div>
        </header>
    </div>
    )
}

export default Header