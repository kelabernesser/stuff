import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import defaultprofile from "../img/defaultProfile.png";
import axios from 'axios'

const AttendanceContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 50px;

    .username{
        padding-left: 10px;
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

export default function UserAttendance(props){
    const [attendeeState, setAttendeeState] = useState({
        username:"",
        imgUrl:""
    })
    console.log(props.user)

    useEffect(() => {
        axios
        .get(`/auth/${props.user}`)
        .then((res) =>
            setAttendeeState((prev) => ({
                username: res.data.username,
                imgUrl: res.data.imgUrl
            }))

        )
        .catch((err) => console.log(err));
    }, [])


console.log(props)
    return(
        <AttendanceContainer>
            <ProfilePicture
                    style={
                        attendeeState.imgUrl === ""
                            ? {
                                backgroundImage: `url(${defaultprofile})`,
                            }
                            : {
                                backgroundImage: `url(${attendeeState.imgUrl})`
                            }
                    }
                />
            <h4 className="username">@{attendeeState.username}</h4>
        </AttendanceContainer>
    )
}