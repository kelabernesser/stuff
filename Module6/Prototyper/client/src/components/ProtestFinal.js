import React, { useState, useEffect } from 'react'
import CommentFinal from '../components/CommentFinal.js'
import axios from 'axios'

const initInputs ={
    textBody:""
}

export default function ProtestFinal(props) {

    const protestAxios = axios.create()

    protestAxios.interceptors.request.use(config => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = `Bearer ${token}`
        return config

    })

    const { title, description, _id } = props

    const [inputs, setInputs] = useState(initInputs)
    const [commentBoolean, setCommentBoolean] = useState(false)
    const [commentState, setCommentState] = useState([])

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
        
    }

    function commentToggle() {
        if (commentState.length > 0) {
            setCommentState([])
        } else {
            protestAxios.get(`/api/comments/protest/${_id}`)
                .then((res) => {
                    setCommentState(res.data)

                })
                .catch((err) => console.log(err))


        }
    }

    function addComment(newComment) {
        protestAxios.post(`/api/comments/${_id}`, newComment)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err)) 
    }

    const commentSwitch = () => {
        setCommentBoolean((prev) => !prev)
    }

    useEffect(() => {
       
    }, [])

    const {textBody} = inputs


    return (
        <div>
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
                    placeholder="Comment"
                />
                <button>+</button>
            </form>
            ): null}
            {commentState.map(comment =>
                <CommentFinal
                    {...comment}
                    key={comment._id}
                />)}
        </div>
    )
}