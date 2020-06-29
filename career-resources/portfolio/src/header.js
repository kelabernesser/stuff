import React, {useState} from "react"

function Header(props){

  const [menuState, setMenuState] = useState(false)

  const menuSwitch = () => {
    setMenuState((prev )=> !prev)
  }


    

    return(
        <header className="mainContainer">
        <div className = "menu-icon" onClick = {menuSwitch}>
          <img src = "https://icons-for-free.com/iconfiles/png/512/line+menu+more+buttton+three+icon-1320186212273781168.png" className="menu-image"/>
          {menuState ? (
            <>
            <div className = "menu-icon" onClick = {menuSwitch}>
            <img src = "https://cdn.iconscout.com/icon/free/png-512/dropdown-keyboard-arrow-menu-key-direction-30471.png" className = "active-icon"/>
            </div>
            <div className = "menu-pull"></div>
            </>
          ): null}
        </div>
        <div className="golden-rod-box"></div>
        <div className="sideBox"></div>
        <div className = "coral-box"></div>
        <div className = "dark-red-box"></div>
        <h1 className="introduction">Hi, I'm Kela Bernesser</h1>
        <h3 className="thingsDesigned">[ Check Out Some Things I Designed]</h3>
        <div className = "burlywood-box"></div>
        <div  className = "red-box"></div>
        <a href = "#eachInfo" className = "rectanlge-arrow"></a>
        <a href = "#eachInfo" className = "triangle-arrow"></a>

      </header>
    )
}

export default Header