import React, { useState } from 'react'

const FontSizeChanger = () => {
    const [fontSize, setFontSize] = useState(16);
  return (
    <div>

     <p style={{ fontSize: `${fontSize}px` }}>
       Welcome to React Learning!
     </p>
     <button onClick={() => setFontSize(fontSize + 2)}>
       Increase Font Size
     </button>
   </div>
  )
}

export default FontSizeChanger