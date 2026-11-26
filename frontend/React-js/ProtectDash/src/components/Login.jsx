import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function loginHandler(e){
        e.preventDefault()

        const UserData ={
            email,
            password
        }

        localStorage.setItem("users", (JSON.stringify(UserData)))
        navigate('/dash')
        
    }
  return (
    <>
    <div>Login</div>
    <form onSubmit={loginHandler}>
        <fieldset>
            <legend>Enter Email</legend>
            <input value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </fieldset>
         <fieldset>
            <legend>Enter Password</legend>
            <input value={password} type="password"  onChange={(e)=>{setPassword(e.target.value)}}/>
        </fieldset>
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login