import React, { useState } from 'react'

const BackgroundChanger = () => {
     const [color, setColor] = useState("white");
  return (
     <div style={{

     backgroundColor: color,

     padding: "50px",

     minHeight: "200px"

   }}>

     <h2>Background Color Changer</h2>

     <button onClick={() => setColor("lightblue")}>

       Blue

     </button>

     <button onClick={() => setColor("lightgreen")}>

       Green

     </button>

   </div>
  )
}

export default BackgroundChanger