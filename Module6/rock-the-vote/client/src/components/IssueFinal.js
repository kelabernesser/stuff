import React, { useState, useContext } from 'react'
import axios from 'axios'
import Comment from "../components/Comment.js"
import { IssueContext } from '../context/IssueProvider.js'


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

    const { title, description, _id, upvotes } = props
    

    const [commentState, setCommentState] = useState([])
    const [inputs, setInputs] = useState(initInputs)
    const [commentBoolean, setCommentBoolean] = useState(false)
    const [upvoteInputs, setUpvoteInputs] = useState(0)
    const { editVotes, voterState} = useContext(IssueContext)

    const { textBody } = inputs

    


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

    const popularityCounter = () => {
        let updates = upvotes
        editVotes(updates, _id)
    }

    

    return (
        <div>
            <button onClick = {popularityCounter}>UpVote</button>
            <h1>{upvotes}</h1>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <button onClick={commentToggle}>See Comments</button>
            <button onClick = {commentSwitch}>Add Comment</button>
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