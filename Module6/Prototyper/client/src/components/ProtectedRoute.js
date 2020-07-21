import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute(props){
    const { path, redirectTo, component: C, token, ...rest} = props
    console.log(props)

    return token ?
    <Route path = {path} render = {() => <C lat={props.lat} lng={props.lng} {...rest}/>}/> :
    <Redirect to = {redirectTo}/>
}