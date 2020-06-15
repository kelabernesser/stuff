import React, {useContext} from 'react'
import {IssueContext} from "../context/IssueProvider.js"
import IssueFinal from '../components/IssueFinal.js'

export default function Main(){
    const {issueArray} = useContext(IssueContext)

    return(
        <div>
            {issueArray.map(issue =>
                    <IssueFinal
                    {...issue}
                    key = {issue._id}
                    />)}

        </div>
    )
}