import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    .add-icon{
        margin-left: 950px;
        margin-top: 10px;
        cursor: pointer;
    }

`

const FormBox = styled.div`
    background-color:  rgb(166, 240, 18);
    border: 10px solid #2e2e2e25;
    width: 580px;
    height: 350px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows:repeat(4, 1fr);
    margin-top: 50px;
    box-shadow: 20px 20px 20px 20px #2e2e2e25;


    input{
        margin: 10px;
        border-radius: 5px;
        font-family: 'Rock Salt', cursive;

    }

    .title{
        grid-colum: 1/2;
        grid-row: 1/2;
        width: 300px;
        height: 30px;
        margin-left: 145px;
    }
    .when{
        grid-column:1/2;
        grid-row: 2/3;
        width: 200px;
        height: 20px;
        margin-left: 30px;
    }
    .where{
        grid-column: 2/3;
        grid-row: 2/3;
        width: 200px;
        height: 20px;
        margin-left: -180px;
    }
    .description{
        grid-colum: 1/3;
        grid-row: 3/4;
        height: 50px;
        width: 400px;
        margin-left: 90px;
    }
    .check-icon{
        grid-column: 1/2;
        grid-row: 4/5;
        width: 100px;
        height: 50px;
        margin-left: 265px;
        cursor: pointer;
        
    }
    .done-icon{
        grid-column: 2/3;
        grid-row: 1/2;
        margin-left: 10px;
        cursor: pointer;
        
        
    }

`


const initInputs = {
    title: "",
    description: "",
    when: "",
    where: ""
}

export default function ProtestForm(props) {
    const [inputs, setInputs] = useState(initInputs)
    const [formBoolean, setFormBoolean] = useState(false)
    const { addProtest, getProtests } = props

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addProtest(inputs)
        getProtests()
    }

    const formToggle = () => {
        setFormBoolean(prev => !prev)
    }

    
    useEffect(() => {
        getProtests()
    }, [])

    const { title, description, when, where } = inputs

    return (
        <FormContainer>
            {formBoolean ? (
                
                <form onSubmit={handleSubmit}>
                    <FormBox>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="title"
                    />
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="description"
                    />
                    <input
                        type="text"
                        name="when"
                        value={when}
                        onChange={handleChange}
                        placeholder="When"
                        className="when"
                    />
                    <input
                        type="text"
                        name="where"
                        value={where}
                        onChange={handleChange}
                        placeholder="Where"
                        className="where"
                    />
                    <div className="check-icon">
                        <img style={{width:"50px"}}src = "https://freeiconshop.com/wp-content/uploads/edd/checkmark-circle-outline.png"/>
                    </div>
                    <div onClick={formToggle} className="done-icon">
                        <img style={{ width: "50px" }} src="https://static.thenounproject.com/png/114046-200.png" />
                    </div>
                    </FormBox>
                </form>
                

            ) : <div onClick={formToggle} className="add-icon">
            <img style={{ width: "50px" }} src="https://img.icons8.com/all/500/add.png" />
        </div>}

        </FormContainer>
    )
}