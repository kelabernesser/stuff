import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

const size = {
    tablet : '768px'
}
const device = {
    tablet : `(max-width:${size.tablet} )`
}

const FormContainer = styled.div`
    .add-icon{
        margin-left: 950px;
        margin-top: 10px;
        cursor: pointer;
    }
    position: fixed;
    z-index: 100;

    @media only screen and ${device.tablet}{
        .add-icon{
           margin-left: 300px; 
        }
    }
    

`

const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    .description{
        width: 100%,
        height: 100px;
    }

    input{
        width: 500px;
        height: 50px;
        border-radius: 5px;
        margin: 20px;
    }

    .specifics{
        display: flex;
    }

    .coordinates{
        display: flex;
    }

    button{
        height: 50px;
        width: 150px;
        border-radius: 5px;
        font-family: 'Rock Salt', cursive;
        outline: none;
        line-height: 1;
    }

    .done-icon{
        margin-left: 1250px;
    }
    @media only screen and ${device.tablet}{
        input{
            width: 300px;
        }
    }


    
    

`


const initInputs = {
    title: "",
    description: "",
    when: "",
    where: "",
    lat: "",
    lng: ""
}

export default function ProtestForm(props) {
    const [inputs, setInputs] = useState(initInputs)
    const [formBoolean, setFormBoolean] = useState(false)

    const { addProtest, getProtests} = props


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

    


    useEffect(() => {
        getProtests()
    }, [])

    const { title, description, when, where, lat, lng } = inputs

    return (
        <FormContainer>
            <Modal
            isOpen={formBoolean} 
            onRequestClose={() => setFormBoolean(false)}
            style={
                {
                    overlay: {
                        backgroundColor: 'grey'
                    },
                    content: {
                        backgroundColor: 'orange',
                        border: '10px solid grey'                    }
                }
            }
            >
                <form onSubmit={handleSubmit}>
                    <FormBox>
                    <div onClick={() => setFormBoolean(false)} className="done-icon">
                            <img style={{ width: "50px" }} src="https://static.thenounproject.com/png/114046-200.png" />
                        </div>
                        
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleChange}
                            placeholder="Title"
                            className="title"
                        />
                        <textarea
                            type="text"
                            name="description"
                            value={description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="description"
                        />
                        <div className="specifics">
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
                        </div>

                        <div className="coordinates">
                        <input
                            type="number"
                            name="lat"
                            value={lat}
                            onChange={handleChange}
                            placeholder="Latitude"
                            className="lat"
                        />
                        <input
                            type="number"
                            name="lng"
                            value={lng}
                            onChange={handleChange}
                            placeholder="Longitude"
                            className="lng"
                        />
                        </div>
                        
                        <button classname="submit-button">+</button>
                    </FormBox>

                </form>
                </Modal>
                

                <div onClick={() => setFormBoolean(true)} className="add-icon">
                    <img style={{ width: "50px" }} src="https://img.icons8.com/all/500/add.png" />
                </div>

        </FormContainer>
    )
}