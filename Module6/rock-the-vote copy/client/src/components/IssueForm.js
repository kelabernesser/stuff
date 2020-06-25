import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'

const InputForm = styled.div`

    form{
        display: flex;
        justify-content: center;
    }

    input{
        border-radius: 15px;
        width: 200px;
        height: 30px;
        margin-left: 20px;
        margin-top: 20px;
        
    }

    
    button{
        border-radius: 15px;
        margin-left: 20px;
        margin-top: 20px;
        width: 50px;
        position: relative;
        outline: none;
       
    }
`

const initInputs = {
    title: "",
    description: ""
}

export default function IssueForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addIssue, getIssue} = props

    
    

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addIssue(inputs)
        getIssue()
    }

    useEffect(() => {
        getIssue()
    }, [])

    

    const {title, description} = inputs

    return(
    <InputForm>
        <form onSubmit = {handleSubmit}>
           <input
            type = "text"
            name = "title"
            value = {title}
            onChange = {handleChange}
            placeholder = "Title"
           />
           <input
            type = "text"
            name = "description"
            value = {description}
            onChange = {handleChange}
            placeholder = "Description"
           />
           <button>+</button>
        </form>
    </InputForm>
    )
}