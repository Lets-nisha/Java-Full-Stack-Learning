import React from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function loginHandler(e){
        e.preventDefault()
        const UserData ={
            email,
            password
        }
        
    }
  return (
    <>
    <div>Login</div>
    <form onSubmit={loginHandler}>
        <fieldset>
            <legend>Enter Email</legend>
            <input value={email} type="email" />
        </fieldset>
         <fieldset>
            <legend>Enter Password</legend>
            <input value={password} type="password"  />
        </fieldset>
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login