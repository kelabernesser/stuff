import React, { useContext, useEffect } from 'react'
import { ProtestContext } from '../context/ProtestProvider'
import ProtestForm from '../components/ProtestForm.js'
import ProtestFinal from '../components/ProtestFinal.js'

export default function Main() {
    const { getProtests, protestState, addProtest } = useContext(ProtestContext)
    

    useEffect(() => {
        getProtests()
    }, [])

    return (
        <div>
            <ProtestForm getProtests={getProtests} addProtest={addProtest}/>
            {protestState.map(protest =>
                <ProtestFinal
                    {...protest}
                    key={protest._id}
                />)}

        </div>
    )
}
