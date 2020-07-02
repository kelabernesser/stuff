import React, { useContext, useState  } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext} from '../context/UserProvider.js'

const initInputs = { username: "", password: "" }

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)

    }

    function toggleForm() {
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return (
        <div>
           {!toggle ?
                        <>
                            <div>
                                <AuthForm
                                    handleChange={handleChange}
                                    handleSubmit={handleSignup}
                                    inputs={inputs}
                                    btnText="Sign up"
                                />

                                <p onClick={toggleForm}>Already a member</p>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <AuthForm
                                    handleChange={handleChange}
                                    handleSubmit={handleLogin}
                                    inputs={inputs}
                                    btnText="Login"
                                />

                                <p onClick={toggleForm}>Not a member?</p>
                            </div>
                        </>

                    }
        </div>
    )
}