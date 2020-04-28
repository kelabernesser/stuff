import React from "react"
import resume from "./assets/resume.pdf"

function Footer(){
    return(
        <footer>
      <h2 className = "boxTitle">Contact</h2>
      <div className = "iconBox">
          <img className = "icons" src = "https://static.thenounproject.com/png/143185-200.png" alt = "resume"/>
          <a className = "iconName" href = {resume}><h3>Resume</h3></a>
        </div>

        <div className = "iconBox">
          <img className="icons" src="https://i.pinimg.com/originals/94/00/17/94001795a3efc6330f4b6b835b68b989.png" alt="emailIcon" />
          <h3 className = "emailName"> kelabernesser@gmail.com</h3>
        </div>

        <div className = "iconBox">
          <img className = "icons" src = "https://cdn.onlinewebfonts.com/svg/img_408253.png" alt = "linkedIn"/>
          <a className = "iconName" href = "https://www.linkedin.com/in/kela-bernesser/"> <h3>https://www.linkedin.com/in/kela-bernesser/</h3>
        </a>
        </div>

        <div className = "iconBox">
          <img className = "icons" src = "https://image.flaticon.com/icons/svg/25/25231.svg" alt = "github"/>
          <a className = "iconName" href = "https://github.com/kelabernesser"><h3>https://github.com/kelabernesser</h3></a>
        </div>
        
      </footer>

    )
}

export default Footer