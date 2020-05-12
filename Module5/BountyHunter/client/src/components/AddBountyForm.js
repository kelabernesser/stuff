import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = { firstName: props.fistName || "", lastName: props.lastName || "", living: props.living || false, bountyAmount: props.bountyAmount || "", type: props.type || "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value, type, checked} = e.target
        type === "checkbox" ? setInputs(prevInputs =>( {...prevInputs, [name] : checked})) : setInputs(prevInputs => ({...prevInputs, [name] : value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit = {handleSubmit} >
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />

            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
            
            <label>
            <input
                
                type="checkbox"
                checked={inputs.living}
                name="living"
                //value={inputs.living}
                onChange={handleChange}
                placeholder="Living"
            />
            Living 
            </label>
            <label>
            <input
                type="radio"
                name="type"
                checked= {inputs.type === "Jedi" }
                value= "Jedi"
                onChange={handleChange}
                placeholder="type"
            />
            Jedi
            </label>
            <label>
            <input
                type="radio"
                name="type"
                checked= {inputs.type === "Sith" }
                value="Sith"
                onChange={handleChange}
                placeholder="type"
            />
            Sith
            </label>
        <button className = "submit-btn">{props.btnText}</button>
        </form>
    )

}