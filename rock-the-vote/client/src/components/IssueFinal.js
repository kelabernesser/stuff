import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import Comment from "../components/Comment.js"
import { IssueContext } from '../context/IssueProvider.js'
import { UserContext } from '../context/UserProvider.js'

import styled from 'styled-components'

const IssueContainer = styled.div`
    color: #2E2929;
    border: 1px solid blue;
    border-radius: 15px;
    margin: 20px;
    box-shadow: 0px 20px 20px 0px #2e2e2e25;

    img{
        cursor: pointer;
    }

    h1{
        margin-left: 20px;
    }

    h2{
        margin-left: 20px;
    }

`


const VoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    margin-top: 5px;

    h1{
        margin-top: 0px;
    }

    
`
const VoteFlex = styled.div`
    display: flex;
    flex-direction: row;
    
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button{
      
      border: 1px solid #2E2929;
      opacity: 1;
      border-radius: 15px;
      margin-right: 20px;
      margin-bottom: 20px;
      width: 150px;
      text-decoration: none;
      outline: none;
  }
`

const CommentForm = styled.div`
form{
    display: flex;
    justify-content: center;
}

input{
    border-radius: 15px;
    width: 200px;
    height: 30px;
    margin-left: 20px;
    margin-top: 20px;
    
}


button{
    border-radius: 15px;
    margin-left: 20px;
    margin-top: 20px;
    width: 50px;
    position: relative;
   
}
`


export default function IssueFinal(props) {

    const issueAxios = axios.create()

    issueAxios.interceptors.request.use(config => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

    const initInputs = {
        textBody: ""
    }

    const { title, description, _id, user: author } = props


    const [commentState, setCommentState] = useState([])
    const [inputs, setInputs] = useState(initInputs)
    const [commentBoolean, setCommentBoolean] = useState(false)
    const [issueUserState, setIssueUserState] = useState({
        username : ""
    })
    const { upvotes, downvotes } = useContext(IssueContext)


    let { textBody } = inputs

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addComment(inputs)
        
    }
    


    function commentToggle() {
        if (commentState.length > 0) {
            setCommentState([])
        } else {
            issueAxios.get(`/api/comment/politicalIssue/${_id}`)
                .then((res) => {
                    setCommentState(res.data)

                })
                .catch((err) => console.log(err))


        }
    }

    function addComment(newComment) {
        issueAxios.post(`/api/comment/${_id}`, newComment)
            .then((res) => {
                setCommentState(commentState.concat(res.data))
            })
            .catch((err) => console.log(err))
    }
    const commentSwitch = () => {
        setCommentBoolean((prev) => !prev)
    }


    useEffect(() => {
        issueAxios
            .get(`/auth/voter/${author}`)
            .then((res) =>
                setIssueUserState((prev) => ({
                    username: res.data.username
                }))
                
            )
            .catch((err) => console.log(err));
            
    }, [])

    console.log(issueUserState.username)







    return (
        <div>
            <IssueContainer>
                <VoteFlex>
                    <VoteContainer>
                        <div onClick={() => upvotes(props._id) } onSubmit = {handleSubmit}>
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-256/thumbs-up-41-616178.png"
                                style={{ width: "35px" }}
                            />
                        </div>
                        <h1>{props.upvotes}</h1>
                    </VoteContainer>

                    <VoteContainer>
                        <div onClick={() => downvotes(props._id)} onSubmit = {handleSubmit}>
                            <img
                                src="https://static.thenounproject.com/png/70800-200.png"
                                style={{ width: "40px" }}
                            />
                        </div>
                        <h1>{props.downvotes}</h1>
                        <h1 className = "username">@{issueUserState.username}</h1>
                    </VoteContainer>
                </VoteFlex>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <ButtonContainer>
                    <button onClick={commentToggle}>See Comments</button>
                    <button onClick={commentSwitch}>Add Comment</button>
                </ButtonContainer>
            </IssueContainer>
            <CommentForm>
            {commentBoolean ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="textBody"
                        value={textBody}
                        onChange={handleChange}
                        placeholder="textBody"
                    />
                    <button>+</button>
                </form>
            ) : null}
            </CommentForm>

            {commentState.map(comment =>
                <Comment
                    {...issueUserState}
                    {...comment}
                    key={comment._id}
                />
            )}

        </div>

    )
}