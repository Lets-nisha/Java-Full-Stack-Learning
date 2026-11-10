import React, { useState } from 'react'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
  return (
       <div>
     <h2>
       {isLogin ? "Welcome User" : "Please Login"}
     </h2>
     <button onClick={() => setIsLogin(true)}>
       Login
     </button>
     <button onClick={() => setIsLogin(false)}>
       Logout
     </button>
   </div>
  )
}

export default Login