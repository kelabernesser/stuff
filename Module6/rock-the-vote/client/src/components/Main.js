import React, {useContext, useEffect} from 'react'
import {IssueContext} from "../context/IssueProvider.js"
import IssueFinal from '../components/IssueFinal.js'
import IssueForm from "../components/IssueForm.js"

//logged in users to add new posts
export default function Main(){
    const {issueArray, addIssue, getIssue} = useContext(IssueContext)
    
    issueArray.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1)
    console.log(issueArray)
    

    

    return(
        <div>
            <IssueForm addIssue = {addIssue} getIssue = {getIssue}/>
            {issueArray.map(issue =>
                    <IssueFinal
                    {...issue}
                    key = {issue._id}
                    />)}
            
        </div>
    )
}