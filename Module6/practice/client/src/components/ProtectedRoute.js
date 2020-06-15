import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute(props) {
    const { path, redirectTo, component: C, token, ...res } = props
    return token ?
        <Route path={path} render={() => <C {...res} />} /> :
        <Redirect to={redirectTo} />
}