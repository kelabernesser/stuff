import React, {useState} from "react"
import axios from 'axios'

export const UserContext = React.createContext()

const voterAxios = axios.create()

voterAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default function UserProvider(props){
    const initState = {
        voter: JSON.parse(localStorage.getItem("voter")) || {},
        token: localStorage.getItem("token") || "",
        comments: []
    }

    const [voterState, setVoterState] = useState(initState)
    // const [issueState, setIssueState] = useState({
    //     _id: "",
    //     title: ""
    // })
    const [comments, setComments] = useState([])
    
    

    function signup(credentials){
        axios.post('/auth/signup', credentials)
        .then(res => {
            const { voter, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("voter", JSON.stringify(voter))
            setVoterState(prevVoterState => ({
                ...prevVoterState,
                voter,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post('/auth/login', credentials)
        .then(res => {
            const { voter, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("voter", JSON.stringify(voter))
            //getVoterIssues()
            setVoterState(prevVoterState => ({
                ...prevVoterState,
                voter,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("voter")
        setVoterState({
            voter: {},
            token: "",
            comments: []
        })
    }

    function handleAuthErr(errMsg){
        setVoterState(prevVoterState => ({
            ...prevVoterState,
            errMsg
        }))
    }

    function resetAuthErr(){
      setVoterState(prevVoterState => ({
          ...prevVoterState,
          errMsg: ""
      }))  
    }

    // function getIssue(){
    //     voterAxios.get('/api/politicalIssues')
    //     .then((res) => {
    //         const issue = res.data[Math.floor(Math.random() * res.data.length)]
    //         setIssueState({
    //             _id: issue._id,
    //             title: issue.title
    //         })
            
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

    
    return(
        <UserContext.Provider
            value = {{
                ...voterState,
                signup,
                login,
                logout,
                handleAuthErr,
                resetAuthErr,
                
            }}>
            {props.children}
        </UserContext.Provider>
    )
}