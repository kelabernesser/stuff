import React from 'react';
import Blog from "./BlogPost"
import blogData from "./blogData"
import Header from "./Header"
import Footer from "./Footer"
import './App.css';

function App() {
  const blogList = blogData.map(function(blog){
    return <Blog 
            key = {blog.id}
            title = {blog.title}
            subTitle = {blog.subTitle}
            author = {blog.author}
            date = {blog.date}
          />
  })
  const buttonStyle = {
    backgroundColor : "#0085a1",
    borderColor: "#0085a1",
    fontSize: "14px",
    fontWeight: "800",
    padding: "15px 25px",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
    marginLeft: "575px",
    marginTop: "10px",
    marginBottom: "10px"
  

  }
  return (
    <div>
      <Header/>
      {blogList}
        <button style = {buttonStyle}>Older Posts</button>
        <hr style = {{borderTop : "1px solid rgba(0,0,0,.1)"}}/>
      <Footer/>
    </div>
  )
}

export default App;
