import React, {useContext, useEffect} from 'react'
import {IssueContext} from "../context/IssueProvider.js"
import IssueFinal from '../components/IssueFinal.js'
import IssueForm from "../components/IssueForm.js"
import styled from 'styled-components'


const MainContainer = styled.div`
background-image: url(https://simg.nicepng.com/png/small/431-4311435_white-stripes-transparent-bkg-rev-ps4-logo-white.png);
background-size: cover;
height: 810px;




`

//logged in users to add new posts
export default function Main(){
    const {issueArray, addIssue, getIssue} = useContext(IssueContext)
    
    issueArray.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1)
    
    useEffect(() => {
        getIssue()
    }, [])

    

    return(
        <MainContainer>
            
            <IssueForm addIssue = {addIssue} getIssue = {getIssue}/>
            {issueArray.length > 0 ? (
                <>
                {issueArray.map(issue =>
                    <IssueFinal
                    {...issue}
                    key = {issue._id}
                    />)}
                </>
            ): <h1>No Issues Posted :(</h1>}
            
            
        </MainContainer>
    )
}