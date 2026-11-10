import React, { useState } from 'react'

const Password = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    
   <div>

     <input

       type={showPassword ? "text" : "password"}

       placeholder="Enter Password"

     />

     <button onClick={() => setShowPassword(!showPassword)}>

       {showPassword ? "Hide Password" : "Show Password"}

     </button>

   </div>
  )
}

export default Password