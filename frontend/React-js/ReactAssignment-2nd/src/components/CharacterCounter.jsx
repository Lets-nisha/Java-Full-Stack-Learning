import React, { useState } from 'react'

const CharacterCounter = () => {
    const [text, setText] = useState("");
  return (
    <div>

     <textarea

       placeholder="Enter Your Text"

       value={text}

       onChange={(e) => setText(e.target.value)}

     />



     <h3>Characters: {text.length}</h3>

   </div>
  )
}

export default CharacterCounter