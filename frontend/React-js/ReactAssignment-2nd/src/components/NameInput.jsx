import React, { useState } from 'react'

const NameInput = () => {

    const [name, setName] = useState("");

  return (
     <div>

     <input

       type="text"

       placeholder="Enter Your Name"

       value={name}

       onChange={(e) => setName(e.target.value)}

     />

     <h2>Your Name: {name}</h2>

   </div>
  )
}

export default NameInput