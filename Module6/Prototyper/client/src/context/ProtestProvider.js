import React , { useState } from 'react'
import axios from 'axios'

export const ProtestContext = React.createContext()

const protestAxios = axios.create()

protestAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config

})

export default function ProtestProvider(props){


    const [protestState, setProtestState] = useState([])
    
    function getProtests(){
        protestAxios.get('/api/protests')
        .then(res => {
            setProtestState(res.data)
        })
        .catch(err => console.log(err))
    }

    function addProtest(newProtest){
        protestAxios.post('/api/protests', newProtest)
        .then(res => {
            setProtestState(protestState.concat(res.data))
        })
        .catch(err => console.log(err))
    }

    
    return(
        <ProtestContext.Provider
            value={{
                protestState,
                getProtests,
                addProtest,
            }}
        >
            {props.children}
        </ProtestContext.Provider>
    )
}