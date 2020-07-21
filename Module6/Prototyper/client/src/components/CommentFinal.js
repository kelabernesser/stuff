import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import defaultprofile from "../img/defaultProfile.png";


const FinalContainer = styled.div`

    margin-top: 20px;
    border: 5px solid red;
    background-color: white;
    width: 500px;
    height: 150px;

   .user-comment{
       margin-top: 0px;
       margin-bottom: -30px;
       margin-left: 20px;
   }     
   .each-comment{
       margin-left: 50px;
   }
`

const ProfilePicture = styled.div`
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: 20% 50%;
    border-radius: 50%;
    border: 1px solid #f2f2f225;
    opacity: 1;
    z-index: 1;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.01, 1);
    cursor: pointer;
`;

export default function CommentFinal(props){
    const [commenterState, setCommenterState] = useState({
        username:"",
        imgUrl:""
    })
    const { textBody } = props

    useEffect(() => {
        axios
        .get(`/auth/${props.user}`)
        .then((res) =>
            setCommenterState((prev) => ({
                username: res.data.username,
                imgUrl: res.data.imgUrl
            }))

        )
        .catch((err) => console.log(err));
    }, [])

    return(
        <FinalContainer className="final-comments">
            <ProfilePicture
                    style={
                        commenterState.imgUrl === ""
                            ? {
                                backgroundImage: `url(${defaultprofile})`,
                            }
                            : {
                                backgroundImage: `url(${commenterState.imgUrl})`
                            }
                    }
                />
            <h3 className="user-comment">@{commenterState.username}</h3>
            <h4 className="each-comment">{textBody}</h4>
        </FinalContainer>
    )

}