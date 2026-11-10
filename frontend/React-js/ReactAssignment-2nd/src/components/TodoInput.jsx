import React, { useState } from 'react'

const TodoInput = () => {
    const [task, setTask] = useState("");
  return (
     <div>

     <h2>Todo Application</h2>
     <input
       type="text"
       placeholder="Enter Your Task"
       value={task}
       onChange={(e) => setTask(e.target.value)}
     />
     <h3>Your Task:</h3>
     <p>{task}</p>
   </div>

  )
}

export default TodoInput