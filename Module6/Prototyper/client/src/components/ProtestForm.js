import React, {useState, useContext, useEffect} from 'react'

const initInputs = {
    title:"",
    description:""
}

export default function ProtestForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addProtest, getProtests} = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addProtest(inputs)
        getProtests()
    }

    useEffect(() => {
        getProtests()
    },[])

    const {title, description} = inputs

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"
            />
            <button>+</button>
        </form>
    )
}