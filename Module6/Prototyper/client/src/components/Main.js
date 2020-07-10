import React, { useContext, useEffect } from 'react'
import { ProtestContext } from '../context/ProtestProvider'
import ProtestForm from '../components/ProtestForm.js'
import ProtestFinal from '../components/ProtestFinal.js'
import Navbar from '../components/NavBar.js'
import styled from 'styled-components'

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
    margin: -8px;
    
`

const NavContainer = styled.div`
    
`

const ProtestContainer = styled.div`
    margin-left: 400px;
    
`

export default function Main() {
    const { getProtests, protestState, addProtest } = useContext(ProtestContext)




    useEffect(() => {
        getProtests()
    }, [])

    return (
        <PageContainer>

            <NavContainer>
                <Navbar />
            </NavContainer>

            <ProtestContainer>
                <ProtestForm getProtests={getProtests} addProtest={addProtest} />
                {protestState.map(protest =>
                    <ProtestFinal
                        {...protest}
                        key={protest._id}
                    />)}
            </ProtestContainer>

        </PageContainer>
    )
}
