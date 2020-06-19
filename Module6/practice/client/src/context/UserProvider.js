import React, {useState} from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = {
        voter: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        type: []
    }

    const [userState, setUserState] = useState(initState)
    const [typeState, setTypeState] = useState([])

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))

        })

            .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))

        })

            .catch(err => console.log(err.response.data.errMsg))

    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login
            }}
        >
            {props.chidlren}
        </UserContext.Provider>
    )
}