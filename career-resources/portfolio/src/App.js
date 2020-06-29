import React from 'react';
import './App.css';

import Footer from "./footer"

import Header from "./header"

function App() {

  return (
    <div id="App">
      <Header/>
      <div id ="eachInfo">
        <h2 className="boxTitle">Trivia</h2>
        <h3 className = "madeWith">made with: React JS, CSS, HTML, and deployed with Surge</h3>
        <p className = "project">A single page trivia application, testing the user's music knowledge. This app uses React Hooks to store and retrieve information and react-router to navigate.</p>
        <a href = "http://kelabernesser-trivia.surge.sh/"><button className = "siteButton"><h3>Take a Look at the Site</h3></button></a>
        <a href = "https://github.com/kelabernesser/stuff/tree/master/Module4/very-useful-trivia"><button className = "siteButton"><h3>Take a Look at the Repo</h3></button></a>
      </div>

      

      <div className="eachInfo1">
        <h2 className="boxTitle">Poll-Talk</h2>
        <h3 className = "madeWith">made with: React JS, Styled Components, Node.js, MongoDB, express, and deployed with Heroku </h3>
        <p className = "project">A user authenticated website allowing each user to post a political issue as well as commenting, liking and disliking on their own political issues as well as other user's political issues.</p>
        <a href = "https://poll-talk.herokuapp.com/"><button className = "siteButton"><h3>Take a Look at the Site</h3></button></a>
        <a href = "https://github.com/kelabernesser/stuff/tree/master/rock-the-vote"><button className = "siteButton"><h3>Take a Look at the Repo</h3></button></a>
      </div>

      

      <div className="eachInfo2">
        <h2 className="boxTitle">Topical Roulette </h2>
        <h3 className = "madeWith">made with: React JS, Styled Components, Node.js, MongoDB, express, and deployed with Heroku </h3>
        <p className = "project">An app that has user authentication, gives the user a random topic from a pre-created list upon login/signup. The user can then use that topic as a conversation starter to talk to other users.</p>
        <a href = "https://topical-roulette-app.herokuapp.com/"><button className = "siteButton"><h3>Take a Look at the Site</h3></button></a>
        <a href = "https://github.com/cameronrasmo/topical-twitter-repo"><button className = "siteButton"><h3>Take a Look at the Repo</h3></button></a>
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
