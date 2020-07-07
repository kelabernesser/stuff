import React from 'react'
import { ProtestContext } from '../context/ProtestProvider'

export default function CommentFinal(props){
    const { textBody } = props

    return(
        <div>
            <h3>{textBody}</h3>
        </div>
    )

}
