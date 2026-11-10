import React, { useState } from 'react'

const AgeChecker = () => {
    const [age, setAge] = useState("");

  return (
     <div>

     <input

       type="number"

       placeholder="Enter Your Age"

       value={age}

       onChange={(e) => setAge(e.target.value)}

     />



     {age !== "" && (

       <h2>

         {Number(age) >= 18 ? "Eligible" : "Not Eligible"}

       </h2>

     )}

  </div>
  )
}

export default AgeChecker