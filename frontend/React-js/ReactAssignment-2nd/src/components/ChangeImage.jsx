import React, { useState } from 'react'

const ChangeImage = () => {
    const [image, setImage] = useState("https://placehold.co/300x200/2563eb/ffffff?text=Image+1");
  return (
       <div>

     <img
       src={image}
       alt="Selected"
       width="300"
     />
     <br />



     <button
       onClick={() =>
         setImage(
           "https://placehold.co/300x200/16a34a/ffffff?text=Image+2"
         )
       }
     >
       Change Image
     </button>
   </div>
  )
}

export default ChangeImage