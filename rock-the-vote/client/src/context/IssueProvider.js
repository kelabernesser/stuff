import React, {useState} from 'react'
import axios from 'axios'

export const IssueContext = React.createContext()

const issueAxios = axios.create()

issueAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function IssueProvider(props){
    const [issueArray, setIssueArray] = useState([])
    const [issueState, setIssueState] = useState([])
    const [upvoteArray, setUpvoteArray] = useState([])

    function getIssue(){
        issueAxios.get('/api/politicalIssues')
        .then((res) => {
            setIssueArray(res.data)
            console.log(res.data.upvotes)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    function getVoterIssues(){
        issueAxios.get('/api/politicalIssues/voter')
        .then((res) => {
            setIssueState(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }



    function upvotes(politicalIssueId){
        issueAxios.put(`/api/politicalIssues/upvote/${politicalIssueId}`)
        .then((res) => {
            console.log(res.data)
            
            setIssueArray(prev => {
                const foundIndex = prev.findIndex((issue) => issue._id === politicalIssueId )
                const beginning = prev.slice(0, foundIndex )
                const ending = prev.slice(foundIndex + 1)
                
                return[...beginning, res.data , ...ending]
            })
        })
        .catch((err) => console.log(err))
    }

    function downvotes(politicalIssueId){
        issueAxios.put(`/api/politicalIssues/downvote/${politicalIssueId}`)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    }

    

    function addIssue(newIssue){
        issueAxios.post('/api/politicalIssues', newIssue)
        .then((res) => {
            setIssueState(issueState.concat(res.data))
        })
        .catch((err) => console.log(err))
    }

    
    

    
    return(
        <IssueContext.Provider
            value = {{
                getIssue,
                issueArray,
                issueState,
                setIssueState,
                getVoterIssues,
                upvotes,
                downvotes,
                addIssue,

            }}>
            {props.children}
        </IssueContext.Provider>
    )
}