import React, {useState, useContext, useEffect} from 'react'
import UserContext from "../context/UserProvider.js"
import styled from 'styled-components'

const InputForm = styled.div`

    form{
        display: grid;
        grid-template-columns: repeat(2 1fr)
        grid-template-rows: repeat(2, 1fr)

    }

    input{
        border-radius: 15px;
        width: 200px;
        height: 30px;
        margin-left: 20px;
        margin-right: 0;
        grid-column: 1/2;
        grid-row: 1/2;
    }

    textarea{
        margin: 10px;
        border-radius: 15px;
        width: 300px;
        height: 100px;
        grid-column: 1/3;
        grid-row: 2/3
    
    }
    button{
        border-radius: 15px;
        grid-column: 2/3;
        grid-row: 1/2;
        width: 50px;
        position: relative;
        right: 130px
    }
`

const initInputs = {
    title: "",
    description: ""
}

export default function IssueForm(props){
    //const { getVoterComments } = useContext(UserContext)
    const [inputs, setInputs] = useState(initInputs)
    
    

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        
        
    }

    useEffect(() => {
        
    },[])

    console.log(issueState)

    const {title, description} = inputs

    return(
    <InputForm>
        <form onSubmit = {handleSubmit}>
        <button>Add Issue</button>

           <input
            type = "text"
            name = "title"
            value = {title}
            onChange = {handleChange}
            placeholder = "Title"
           />
           <textarea
            type = "text-area"
            name = "description"
            value = {description}
            onChange = {handleChange}
            placeholder = "Description"
           />
        </form>
    </InputForm>
    )
}