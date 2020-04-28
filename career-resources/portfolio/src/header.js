import React from "react"

function Header(props){


    

    return(
        <header className="mainContainer">
        <div className="headerBox1"></div>
        <div className="headerBox2"></div>
        <div className="introBox"></div>
        <div className="sideBox"></div>
        <h1 className="introduction">Hi, I'm Kela Bernesser</h1>
        <h3 className="thingsDesigned">[ Check Out Some Things I Designed]</h3>
        <img className="arrow" src="https://cdn.pixabay.com/photo/2012/04/24/11/28/arrow-39450_1280.png" alt="arrow" />
      </header>
    )
}

export default Header