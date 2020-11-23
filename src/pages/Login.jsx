import React, { useState } from 'react'
import '../styles/Auth.css'
import history from '../history'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

function handleUsernameOnChange(event) {
    setUsername(event.target.value)
}

function handlePasswordOnChange(event) {
    setPassword(event.target.value)
}

function handleOnSubmitLogin(event) {
    event.preventDefault();
}

    if (username === password) {
        localStorage.setItem('IsAuthenticated', 'true')


        alert("Login Successful")
    }   else{
        alert("Invalid credentials")
    }



    return(
        <div className='auth-container'>
            <h1> Login Page </h1>

        
        <form className="auth" onSubmit={handleOnSubmitLogin}>
            <input type= 'text' placeholder='Enter your email' value={username} onChange={handleUsernameOnChange}/>
            <input type= 'password' value={password} onChange={handlePasswordOnChange}/>
            <button type='submit'> Login </button>
        </form>
        </div>
    );

    }

export default Login;
