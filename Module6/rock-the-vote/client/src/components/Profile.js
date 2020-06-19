import React, { useContext, useEffect } from "react"
import { UserContext } from "../context/UserProvider"
import { IssueContext } from '../context/IssueProvider'
import styled from "styled-components"
import IssueFinal from "../components/IssueFinal.js"

const IssuePage = styled.div`
    height: 200vh;
    color: blue;
    display: grid;
    grid-template-columns: repear(3, 1fr);
    grid-template-row: repear(3, 1fr);

    & > .welcome-side{
        grid-column: 1/2
    };

    & > .issue-side{
        grid-column: 2/3
    }
   
`
const WelcomeSide = styled.div`
    margin-left: 50px;

    & > h1{
        position: relative;
        left: 50px;
    }

`
const IssueSide = styled.div`
`

export default function Profile() {
    const { voterState } = useContext(IssueContext)


    return (
        <IssuePage>
            <WelcomeSide className="welcome-side">
                <h1>Welcome </h1>
            </WelcomeSide>
            <IssueSide className='issue-side'>
                {voterState.map(issue =>
                    <IssueFinal
                        {...issue}
                        key={issue._id}
                    />)}
            </IssueSide>
        </IssuePage>
    )
}