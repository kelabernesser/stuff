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
    const [issueState, setIssueState] = useState({
        _id: "",
        title: ""
    })
    const [issueArray, setIssueArray] = useState([])

    function getIssue(){
        issueAxios.get('/api/politicalIssues')
        .then((res) => {
            const issue = res.data[Math.floor(Math.random() * res.data.length)]
            setIssueState({
                _id: issue._id,
                title: issue.title
            })
            setIssueArray(res.data)
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
    

    
    return(
        <IssueContext.Provider
            value = {{
                issueState,
                getIssue,
                issueArray
            }}>
            {props.children}
        </IssueContext.Provider>
    )
}