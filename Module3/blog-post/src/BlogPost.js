import React from "react"

function Blog(props){
    const blogStyles = {
        marginLeft : "150px",
        marginRight : "150px",
        
    }

    const titleStyle = {
        fontSize : "36px",
        fontWeight: "800",
        marginTop: "50px",
        marginBottom: "10px",
        fontFamily: "Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif"
    }

    const subTitleStyle = {
        fontSize: "1.75rem",
        fontWeight: "300",
        fontFamily: "Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
        margin: "0 0 10px"
    }

    const infoStyle = {
        fontSize: "20px",
        marginTop: "0",
        fontStyle: "italic",
        color: "#868e96",
        margin: "30px 0",
        fontFamily: "Lora,'Times New Roman',serif"
    }

    const linkStyle = {
        textDecoration: "none",
        color: "black",
    }
    return(
        <div style = {blogStyles}>
            <h2 style = {titleStyle}>{props.title}</h2>
            <h3 style = {subTitleStyle}>{props.subTitle}</h3>
            <p style = {infoStyle}>Posted by <a style = {linkStyle}href="https://blackrockdigital.github.io/startbootstrap-clean-blog/#">{props.author} </a>on {props.date}</p>
            <hr style = {{borderTop : "1px solid rgba(0,0,0,.1)"}}/>
        </div>
    )
}

export default Blog