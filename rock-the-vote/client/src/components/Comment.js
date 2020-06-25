import React from 'react'
import styled from 'styled-components'

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
const {textBody} = props
console.log(props.username)
    return(
        <CommentContainer>
            <h2>@{props.username}</h2>
            <p>{textBody}</p>
        </CommentContainer>
    )
}