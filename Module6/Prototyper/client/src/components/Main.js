import React, { useContext, useEffect, useState } from 'react'
import { ProtestContext } from '../context/ProtestProvider'
import ProtestForm from '../components/ProtestForm.js'
import ProtestFinal from '../components/ProtestFinal.js'
import Navbar from '../components/NavBar.js'
import styled from 'styled-components'
import Modal from 'react-modal'

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
    margin: -8px;
    margin-right: -100px;
 
`

const NavContainer = styled.div`
    
`

const ProtestContainer = styled.div`
    margin-left: 400px;

    .protest-form{
        z-index: 100;
        position: fixed;
    }
    .protest-final{
        z-index: -1;
    }

   
    
`
Modal.setAppElement(`#root`)
export default function Main(props) {
    const { getProtests, protestState, addProtest } = useContext(ProtestContext)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    console.log(protestState)
    
   

    useEffect(() => {
        getProtests()
    }, [])

    return (
        <>
        <PageContainer>
            
            <NavContainer>
                <Navbar />
            </NavContainer>
        
            <ProtestContainer>
            <ProtestForm className="protest-form" getProtests={getProtests} addProtest={addProtest} />
                {protestState.map(protest =>
                    <ProtestFinal
                        className="protest-final"
                        {...protest}
                        key={protest._id}
                    />)}
            </ProtestContainer>

        </PageContainer>
        </>
    )
}
