import React, { useState } from "react"

function Header(props) {

  const [menuState, setMenuState] = useState(false)

  const menuSwitch = () => {
    setMenuState((prev) => !prev)
  }




  return (
    <header className="mainContainer">
      <div className="menu-icon" onClick={menuSwitch}>
        <img src="https://icons-for-free.com/iconfiles/png/512/line+menu+more+buttton+three+icon-1320186212273781168.png" className="menu-image" />
        {menuState ? (
          <>
            <div className="menu-pull">
              <div className = "link-container">
                <img src="https://image.flaticon.com/icons/svg/54/54900.svg" className="link-icon" />
                <a href="#eachInfo" className="link">Projects</a>
              </div>
              <div className = "link-container">
                <img src="https://image.flaticon.com/icons/svg/54/54900.svg" className="link-icon" />
                <a href="#aboutMe" className="link">About Me</a>
              </div>
              <div className = "link-container">
                <img src="https://image.flaticon.com/icons/svg/54/54900.svg" className="link-icon" />
                <a href="#contact" className="link">Contact</a>
              </div>

            </div>
          </>
        ) : null}
      </div>
      <div className="golden-rod-box"></div>
      <div className="sideBox"></div>
      <div className="coral-box"></div>
      <div className="dark-red-box"></div>
      <h1 className="introduction">Hi, I'm Kela Bernesser</h1>
      <h3 className="thingsDesigned">[ Check Out Some Things I Designed]</h3>
      <div className="burlywood-box"></div>
      <div className="red-box"></div>
      <a href="#eachInfo" className="rectanlge-arrow"></a>
      <a href="#eachInfo" className="triangle-arrow"></a>

    </header>
  )
}

export default Header