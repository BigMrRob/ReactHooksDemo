import React from 'react'

function Register() {

    const [user, setUser] = React.useState('')

    const nameRef = React.useRef()
    const emailRef = React.useRef()
    const passwordRef = React.useRef()

    const handleReset = (e) => {
        e.preventDefault()

        nameRef.current.value = ''
        emailRef.current.value = ''
        passwordRef.current.value = ''

        setUser('')        
    }
    const handleSubmit = e => {
        e.preventDefault()

        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        setUser(`Name: ${name}, Email: ${email}, Password: ${password}`)

    }
    return (
        <div className="box">
            <h3>This is a register form persisting/resetting login context with useRef to avoid re-render</h3>
            <form className="myform">
                <label>
                    Name: <input placeholder="name" type="text" ref={nameRef} />
                </label>  
                <br></br>
                <label>
                    Email: <input placeholder="email" type="text" ref={emailRef} />
                </label>
                <br></br>
                <label>
                    Password: <input placeholder="password" type="password" ref={passwordRef} />
                </label>
                <br></br>
                <button onClick={(e) => {
                    e.preventDefault()
                    nameRef.current.focus()
                }
                }> Focus on the Name Input</button>

                <br></br>
                <br></br>
                <button onClick={(e) => {
                    e.preventDefault()
                    emailRef.current.focus()
                }
                }> Focus on the Email Input</button>

                <br></br>
                <br></br>
                <button onClick={(e) => {
                    e.preventDefault()
                    passwordRef.current.focus()
                }
                }> Focus on the Password Input</button>

                <br></br>
                <br></br>

                <button onClick={handleSubmit} style={{marginRight: "10px"}}>Login</button>
            
                <button onClick={handleReset}>Logout</button>
            </form>

            {user !== '' ? <h6>Welcome to the dashboard: {user}</h6> : <h6>Please Login Above</h6>}
        </div>
    )
}

export default Register
