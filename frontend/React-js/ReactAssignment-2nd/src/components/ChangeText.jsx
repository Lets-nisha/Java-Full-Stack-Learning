import React, { useState } from 'react'

const ChangeText = () => {
    const [message, setMessage] = useState("Hello");
  return (
     <div>

     <h2>{message}</h2>
     <button onClick={() => setMessage("Welcome to React")}>
       Change Text
     </button>
   </div>
  )
}

export default ChangeText