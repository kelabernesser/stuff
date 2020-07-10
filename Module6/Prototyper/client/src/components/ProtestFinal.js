import React, { useState, useEffect, useContext } from 'react'
import CommentFinal from '../components/CommentFinal.js'
import axios from 'axios'
import { ProtestContext } from '../context/ProtestProvider.js'
import styled from 'styled-components'

const ProtestContainer = styled.div`
    border: 10px solid orange;
    margin-right: 400px;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        height: 50px;
        width: 150px;
        border-radius: 5px;
        font-family: 'Rock Salt', cursive;
        outline: none;
    }
   
    .attending-class{
        display: flex;
        flex-direction: row;
    }

    .attending-button{
        margin-left: 200px;
    }

    
    
    .specifics-class{
        display: flex;
        flex-direction: row;
    }

    .where{
        margin-left: 50px;
    }

    .when{
        margin-right: 50px;
    }

    .comment-class{
        display: flex;
        flex-direction: row;
    }

    .final-comments{
        display: flex;
        flex-direction: column;
    }

    
    input{
        height:100px;
        width: 600px;
        border-radius: 5px;
        margin-top: 20px;
        margin-bottom: 20px;

    }

    .add-comment{
        margin-left: 230px;
        height: 25px;
    }

    
    
    


`




const initInputs = {
    textBody: ""
}

export default function ProtestFinal(props) {

    const protestAxios = axios.create()

    protestAxios.interceptors.request.use(config => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = `Bearer ${token}`
        return config

    })

    const { title, description, when, where, _id, user: author } = props
    const { attending } = useContext(ProtestContext)



    const [inputs, setInputs] = useState(initInputs)
    const [commentBoolean, setCommentBoolean] = useState(false)
    const [commentState, setCommentState] = useState([])
    const [userState, setUserState] = useState({
        username : ""
    })

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
        protestAxios
            .get(`/auth/${author}`)
            .then((res) =>
                setUserState((prev) => ({
                    username: res.data.username
                }))
                
            )
            .catch((err) => console.log(err));
            
    }, [])

    const { textBody } = inputs



    return (
        <div>
            <ProtestContainer>
                <div className="attending-class">
                    <h4 className="attending-show">people attending : {props.attending}</h4>
                    <button className="attending-button" onClick={() => attending(props._id)}>
                        I'm attending
                    </button>
                </div>
                <h1 className = "username">@{userState.username}</h1>
                <h1 className="title">{title}</h1>
                <h2 className="description">{description}</h2>
                <div className="specifics-class">
                    <h3 className="when">When : {when}</h3>
                    <h3 className="where">Where : {where}</h3>
                </div>
                <div className="comment-class">
                    <button onClick={commentToggle} className="see-comments">See Comments</button>
                    <button onClick={commentSwitch} className="add-comments">Add Comment</button>
                </div>

                {commentBoolean ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="textBody"
                            value={textBody}
                            onChange={handleChange}
                            placeholder="Comment"
                            className="comment-container"
                        />
                        <button className="add-comment">+</button>
                    </form>
                ) : null}

                {commentState.map(comment =>
                    <CommentFinal
                        {...userState}
                        {...comment}
                        key={comment._id}
                    />)}
            </ProtestContainer>
            


        </div>
    )
}