import React from 'react'
import { ProtestContext } from '../context/ProtestProvider'
import styled from 'styled-components'

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

export default function CommentFinal(props){
    const { textBody } = props

    return(
        <FinalContainer className="final-comments">
            <h3 className="user-comment">@{props.username}</h3>
            <h4 className="each-comment">{textBody}</h4>
        </FinalContainer>
    )

}
