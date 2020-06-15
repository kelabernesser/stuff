import React, {useContext, useState} from 'react'
import { UserContext } from "../context/UserProvider"
import CommentList from '../components/CommentList.js'
import styled from 'styled-components'

const IssueContainer = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    margin: 25px;
`

const initInputs = {
    textBody:""
}




export default function Issue(props){
   

    // function getVoterId(voterId)
    // voterAxios.get('/api/politicalIssues/voter')



    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        addComment(inputs)
        setInputs(initInputs)
        
        console.log(comments)
        getComments()
    }
    
    const commentSwitch = () => {
        setCommentState((prev) => !prev)
    }

    
    

    const upVote = () => {
        console.log(props)
    }
    

    

    const {textBody} = inputs
    
    console.log(props)
    

    return(
        <IssueContainer>
            <button onClick = {upVote}>Upvote</button>
            <button >Downvote</button>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <button onClick = {commentSwitch}>Add Comment</button>
            {commentState ? (
            <form onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    name = "textBody"
                    value = {textBody}
                    onChange = {handleChange}
                    placeholder = "Comment"
                />
            <button>+</button>
            
            </form>
            
            ): null}
            
            
        </IssueContainer>
    )
}