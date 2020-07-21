import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CommentContainer = styled.div`
    border: 1px solid red;
    border-radius: 15px;
    margin: 20px;
    box-shadow: 0px 20px 20px 0px #2e2e2e25;

    h2{
        margin-left: 20px;
    }
    p{
        margin-left: 30px;
    }
`

export default function Comment(props){
const [commenterState, setCommenterState] = useState({
    username:""
})
const {textBody} = props

useEffect(() => {
    axios
    .get(`/auth/${props.user}`)
    .then((res) =>
        setCommenterState((prev) => ({
            username: res.data.username,
        }))

    )
    .catch((err) => console.log(err));
}, [])


console.log(props.username)
    return(
        <CommentContainer>
            <h2>@{commenterState.username}</h2>
            <p>{textBody}</p>
        </CommentContainer>
    )
}