import React, { useContext, useEffect } from "react"
import { UserContext } from "../context/UserProvider"
import { IssueContext } from '../context/IssueProvider'
import styled from "styled-components"
import IssueFinal from "../components/IssueFinal.js"

const IssuePage = styled.div`
    height: 200vh;
    color: #2E2929;
    display: grid;
    grid-template-columns: repear(3, 1fr);
    grid-template-row: repear(3, 1fr);
    background-size: cover;
    height: 810px;

    & > .welcome-side{
        grid-column: 1/2
    };

    & > .issue-side{
        grid-column: 2/3
    }

    
   
`
const WelcomeSide = styled.div`
    margin-left: 50px;
    background-image: url(https://cdn140.picsart.com/321497502077211.png?type=webp&to=min&r=640);


    & > h1{
        position: relative;
        left: 50px;
    }

`
const IssueSide = styled.div`



`

export default function Profile() {
    const { issueState, getIssue} = useContext(IssueContext)

    issueState.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1)
    
    useEffect(() => {
        getIssue()
    }, [])
    

    
    return (
        <IssuePage>
            <WelcomeSide className="welcome-side">
            </WelcomeSide>
            <IssueSide className='issue-side'>
                {issueState.length > 0 ? (
                    <>
                    {issueState.map(issue =>
                    <IssueFinal
                        {...issue}
                        key={issue._id}
                    />)}
                    </>
                ): <h1>No Issues Posted :(</h1>}
                
            </IssueSide>
        </IssuePage>
    )
}