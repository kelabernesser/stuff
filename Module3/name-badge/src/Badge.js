import React from "react"

class Badge extends React.Component {

    render() {
        const { badgeArr } = this.props
        const badges = badgeArr.map((badge, index) => {
            const badgeStyle = {
                border: "3px solid black",
                display: "grid",
                gridTemplateColumns: "repeat(8,1fr)",
                gridTemplateRows: "repeat(7,1fr)",
                rowGap: "10px",
                columnGap: "10px",
                margin: "10px",
                padding: "0px",
                width: "800px",
                borderRadius: "25px",
            }

            const navBar = {
                backgroundColor: "grey",
                color: "white",
                gridColumn: "1/9",
                gridRow: "1/2",
                borderRadius: "10px",
                border: "3px solid black"
            }

            const nameStyle = {
                gridColumn: "2/6",
                gridRow: "2/3"
            }
            const phoneStyle = {
                gridColumn: "6/9",
                gridRow: "2/3"
            }
            const birthStyle = {
                gridColumn : "2/6",
                gridRow: "3/4"
            }
            const foodStyle = {
                gridColumn: "6/9",
                gridRow: "3/4"
            }
            const emailStyle = {
                gridColumn: "2/6",
                gridRow: "4/5"
            }
            const textStyle = {
                gridColumn: "2/8",
                gridRow: "5/9",
                border: "3px solid black",
                
            }

            return (
                <div
                    style={badgeStyle}
                    key={index}>
                <nav
                    style = {navBar}>
                        Badge:
                </nav>
                    <p style = {nameStyle}>
                        Name: {badge.firstName} {badge.lastName}
                    </p>
                    <p style = {birthStyle}>
                        Place of Birth:{badge.placeOfBirth}
                    </p>
                    <p style = {emailStyle}>
                        Email: {badge.email}
                    </p>
                    <p style = {phoneStyle}>
                        Phone:  {badge.phone}
                    </p>
                    <p style = {foodStyle}>
                        Favorite Food: {badge.favoriteFood}
                    </p>
                    <p
                        style = {textStyle}>
                        {badge.aboutYou}
                    </p>
                </div>

            )

        })

        return (
            <div>
                {badges}
            </div>
        )
    }
}

export default Badge