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

    function attending(protestId){
        protestAxios.put(`/api/protests/attending/${protestId}`)
        .then((res) => {
            console.log(res.data)

            setProtestState(prev => {
                const foundIndex = prev.findIndex((issue) => issue._id === protestId )
                const beginning = prev.slice(0, foundIndex )
                const ending = prev.slice(foundIndex + 1)

                return [...beginning, res.data, ...ending]
            })
        })
        .catch((err) => console.log(err))
    }

    function notAttending(protestId){
        protestAxios.put(`/api/protests/notAttending/${protestId}`)
        .then((res) => {
            console.log(res.data)

            setProtestState(prev => {
                const foundIndex = prev.findIndex((issue) => issue._id === protestId )
                const beginning = prev.slice(0, foundIndex )
                const ending = prev.slice(foundIndex + 1)

                return [...beginning, res.data, ...ending]
            })
        })
        .catch((err) => console.log(err))
    }

    function deleteProtest(protestId){
        protestAxios.delete(`/api/protests/${protestId}`)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    }

    

    
    return(
        <ProtestContext.Provider
            value={{
                protestState,
                getProtests,
                addProtest,
                attending,
                notAttending,
                deleteProtest
            }}
        >
            {props.children}
        </ProtestContext.Provider>
    )
}