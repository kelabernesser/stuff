import React, { useState, useContext } from 'react'
import axios from 'axios'
import Comment from "../components/Comment.js"
import { IssueContext } from '../context/IssueProvider.js'
import { UserContext } from '../context/UserProvider.js'


export default function IssueFinal(props) {

    const issueAxios = axios.create()

    issueAxios.interceptors.request.use(config => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

    const initInputs = {
        textBody: "",

    }

    const { title, description, _id } = props
    


    const [commentState, setCommentState] = useState([])
    const [inputs, setInputs] = useState(initInputs)
    const [commentBoolean, setCommentBoolean] = useState(false)
    const [voteBoolean, setVoteBoolean] = useState()
    const { upvotes, downvotes, decrementDownvote, decrementUpvote, issueArray } = useContext(IssueContext)

    let { textBody } = inputs


    

    issueArray.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1)
    console.log(issueArray)



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


    function upvoteToggle() {
        if (!voteBoolean) {
            upvotes(props._id)

            if (props.downvotes >= 0) {
                decrementDownvote(props._id)
            }
            setVoteBoolean(true)
        }
        
    }

    function downvoteToggle() {
        if (voteBoolean) {
            downvotes(props._id)

            if (props.upvotes >= 0) {
                decrementUpvote(props._id)
            }
            setVoteBoolean(false)

        }


        
    }
    












    return (
        <div>

            <button onClick={upvoteToggle}>UpVote</button>
            <button onClick={downvoteToggle}>DownVote</button>
            <h1>{props.upvotes}</h1>
            <h1>{props.downvotes}</h1>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <button onClick={commentToggle}>See Comments</button>
            <button onClick={commentSwitch}>Add Comment</button>
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

            {commentState.map(comment =>
                <Comment
                    {...comment}
                    key={comment._id}
                />
            )}
        </div>
    )
}