import React, { Component } from 'react';
import './App.css';
import toDoListImg from "./assets/toDoList.png"
import nameBadge from "./assets/nameBadge.png"
import reactRoto from "./assets/roto-router.png"
import Footer from "./footer"

import Header from "./header"

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="eachInfo">
        <h2 className="boxTitle">Simple ToDo List</h2>
        <h3 className = "madWith">made with: Vanilla JS, CSS, HTML</h3>
        <p className = "project">An app that allows the user to make a toDo and mark it as complete or delete the toDo</p>
        <a href = "http://127.0.0.1:5501/todo-project/index.html"><button className = "siteButton"><h3>Take a Look at the Site</h3></button></a>
        <a href = "https://github.com/kelabernesser/stuff/tree/master/module2/todo-project"><button className = "siteButton"><h3>Take a Look at the Repo</h3></button></a>
      </div>

      <div className="details1">
        <img src={toDoListImg} alt="todoList" />
      </div>

      <div className="eachInfo1">
        <h2 className="boxTitle">Name Badge</h2>
        <h3 className = "madWith">made with: Vanilla JS, CSS, HTML</h3>
        <p className = "project">Creating a Name Badge with the values managed by state</p>
        <a href = "http://kelabernesser-namebadge.surge.sh/"><button className = "siteButton"><h3>Take a Look at the Site</h3></button></a>
        <a href = "https://github.com/kelabernesser/stuff/tree/master/Module3/name-badge"><button className = "siteButton"><h3>Take a Look at the Repo</h3></button></a>
      </div>

      <div className="details2">
        <img src={nameBadge} alt="nameBadge" />
      </div>

      <div className="eachInfo2">
        <h2 className="boxTitle">Single Page Applications</h2>
        <h3 className = "madWith">made with: React, JS, CSS, HTML</h3>
        <p className = "project">Using React Router to switch between pages through a single page application</p>
        <a href = "http://kelabernesser-singlepageapp.surge.sh/"><button className = "siteButton"><h3>Take a Look at the Site</h3></button></a>
        <a href = "https://github.com/kelabernesser/stuff/tree/master/Module4/react-roto-router"><button className = "siteButton"><h3>Take a Look at the Repo</h3></button></a>
      </div>

      <div className="details3">
        <img src={reactRoto} alt="reactRoto" />
      </div>

      <div className="aboutMe">
        <img className = "picture-of-me" alt = "picture-of-me"/>
        <div className = "aboutBox">
          <h2 className="boxTitle">About Me</h2>
          <p className = "aboutPara">In my free time I'm usually outside with friends,<br/> either climbing or hiking.
            If it's a rainy day than<br/> you can catch me  inside practicing on my guitar<br/> or watching movies.
          </p>
        </div>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
