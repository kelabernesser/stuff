import React, { useState, useEffect, useContext } from 'react'
import CommentFinal from '../components/CommentFinal.js'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { ProtestContext } from '../context/ProtestProvider.js'
import styled from 'styled-components'
import defaultprofile from "../img/defaultProfile.png";
import { UserContext } from '../context/UserProvider.js'
import UserAttendance from '../components/UserAttendance.js'



const ProtestWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const ProtestContainer = styled.div`
    margin-top: 25px;
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
        line-height: 1;
    }

    .attendance-toggle{
        display: flex;
        flex-direction: column
    }
   
    .attending-class{
        display: flex;
        flex-direction: row;
    }

    .attending-button{
        margin-left: 10px;
    }
    .delete-button{
        margin-left: 10px;
        background-color: red;
    }
    .directions-button{
        margin-left: 60px;
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
    .comment-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        margin-top: 25px;
        height: 25px;
    }

    .comment-textarea{
        margin-top: 25px;
        border: 5px solid grey;
        height: 100px;
        width: 500px;
    }

    .user-picture{
        width: 80px;
        height: 80px;
        border-radius: 100%;
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
    z-index: 0;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.01, 1);
    cursor: pointer;
`;
const AttendeeContainer = styled.div`
    padding-top: 50px;
    
`

export const MapContext = React.createContext()

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
    const { attending, notAttending, deleteProtest, getProtests } = useContext(ProtestContext)
    const { user } = useContext(UserContext)



    const [inputs, setInputs] = useState(initInputs)
    const [commentBoolean, setCommentBoolean] = useState(false)
    const [commentState, setCommentState] = useState([])
    const [attendeeBoolean, setAttendeeBoolean] = useState(false)
    const [userState, setUserState] = useState({
        username: ""
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
        getProtests()
        protestAxios
            .get(`/auth/${author}`)
            .then((res) =>
                setUserState((prev) => ({
                    username: res.data.username,
                    imgUrl: res.data.imgUrl
                }))

            )
            .catch((err) => console.log(err));

    }, [])



    const attendeesToggle = () => {
        setAttendeeBoolean(prev => !prev)
    }

    const deleteFinal = () => {
        deleteProtest(props._id)
        getProtests()
    }

    const { textBody } = inputs


    return (
        <ProtestWrapper>

            <AttendeeContainer>
                {attendeeBoolean ? (
                    <div>
                        {props.userArray.map(user =>
                            <UserAttendance
                                user={user}
                                key={user._id}
                            />)}
                    </div>
                ) : null}

            </AttendeeContainer>
            <ProtestContainer>
                <div className="attending-class">
                    <div className="attendance-toggle" onClick={attendeesToggle}>
                        See who's going!
                        <img style={{ width: "60px" }} src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronLeft-512.png" />
                    </div>
                    <div className="directions-button">
                        <Link
                            to={{
                                pathname:'/maps',
                                state:{
                                    lat:props.lat,
                                    lng:props.lng
                                }
                            }}
                            >Maps</Link>
                        
                    </div>



                    <button className="attending-button" onClick={() => attending(props._id)}>
                        I'm Attending!
                    </button>

                    <button className="attending-button" onClick={() => notAttending(props._id)}>
                        I'm Not Attending!
                    </button>
                    {user._id === author ? (
                        <button
                            onClick={deleteFinal}
                            className="delete-button"
                        >
                            Delete

                        </button>
                    ) : null}

                </div>
                <h3>Organized By:</h3>
                <ProfilePicture
                    style={
                        userState.imgUrl === ""
                            ? {
                                backgroundImage: `url(${defaultprofile})`,
                            }
                            : {
                                backgroundImage: `url(${userState.imgUrl})`
                            }
                    }
                />
                <h1 className="username">@{userState.username}</h1>
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
                    <form className="comment-container" onSubmit={handleSubmit}>
                        <textarea
                            type="text"
                            name="textBody"
                            value={textBody}
                            onChange={handleChange}
                            placeholder="Comment"
                            className="comment-textarea"
                            
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
        </ProtestWrapper>
    )
}