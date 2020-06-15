import React from "react"

class Badge extends React.Component {

    render() {
        const { badgeArr } = this.props
        const badges = badgeArr.map((badge, index) => {
            const badgeStyle = {
                border: "3px solid black",
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                columnGap: "10px",
                margin: "10px",
                padding: "0px",
                width: "820px",
            }

            const navBar = {
                backgroundColor: "rgb(27, 116, 15)",
                color: "white",
                border: "3px solid black"
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
                    <p >
                        Name: {badge.firstName} {badge.lastName}
                    </p>
                    <p >
                        Place of Birth:{badge.placeOfBirth}
                    </p>
                    <p >
                        Email: {badge.email}
                    </p>
                    <p >
                        Phone:  {badge.phone}
                    </p>
                    <p >
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