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
    const [voterState, setVoterState] = useState([])

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
            setVoterState(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    function editVotes( updates, politicalIssueId){
        issueAxios.put(`/api/politicalIssues/${politicalIssueId}`, updates)
        .then((res) => {
            console.log(res.data)
            
            //setUpVoteState(prev => prev + 1)
            //setVoterState(prev => prev.map(issue => issue._id !== politicalIssueId ? issue : res.data))
        })
        .catch((err) => console.log(err))
    }

    console.log(voterState)

    function addIssue(newIssue){
        issueAxios.post('/api/politicalIssues', newIssue)
        .then((res) => {
            setVoterState(voterState.concat(res.data))
        })
        .catch((err) => console.log(err))
    }

    
    

    
    return(
        <IssueContext.Provider
            value = {{
                getIssue,
                issueArray,
                voterState,
                setVoterState,
                getVoterIssues,
                editVotes,
                addIssue
            }}>
            {props.children}
        </IssueContext.Provider>
    )
}