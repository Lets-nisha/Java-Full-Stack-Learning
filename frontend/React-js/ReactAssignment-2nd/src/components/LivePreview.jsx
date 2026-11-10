import React, { useState } from 'react'

const LivePreview = () => {
    const [message, setMessage] = useState("");
  return (
    <div>

     <textarea
       placeholder="Write Your Message"
       value={message}
       onChange={(e) => setMessage(e.target.value)}
     />
     <h3>Live Preview:</h3>
     <p>{message}</p>
   </div>
  )
}

export default LivePreview