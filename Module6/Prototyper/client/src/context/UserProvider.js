import React, {useState} from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || ""
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token,

                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post('/auth/login', credentials)
        .then(res => {
            // const { user, token } = res.data
            // localStorage.setItem("token", token)
            // localStorage.setItem("user", JSON.stringify(user))
            // setUserState(prevUserState => ({
            //     ...prevUserState,
            //     user,
            //     token
            // }))
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem("user")
        setUserState({
            voter:{},
            token:""
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ""
        }))
    }

    const { user } = userState

    return(
        <UserContext.Provider
            value={{
                ...userState,
                user,
                signup,
                login,
                logout,
                handleAuthErr,
                resetAuthErr
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}