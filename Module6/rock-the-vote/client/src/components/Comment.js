import React from 'react'

export default function Comment(props){
const {textBody} = props
    return(
        <div>
            <p>{textBody}</p>
        </div>
    )
}