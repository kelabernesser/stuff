import React from "react"

function Footer() {
    const footerStyle = {
        width: "100%",
        height: "200px",
        padding: "50px 0 65px"
    }
    const containerStyle = {
        width: "100%",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
    }

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style = {iconStyle}>

                </div>

            </div>

        </footer>
    )
}

export default Footer