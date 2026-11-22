import React, { useMemo, useState } from 'react'
import Fruits from './Fruits'


const data =  ['Mango', 'Banana', 'Apple', 'Guava']

const App = () => {
  const [Count, setCount] = useState(0)

    // const data = useMemo(() => ['Mango', 'Banana', 'Apple', 'Guava'], []);

  
  return (
  <>
  <div>
    <h1>App Component</h1>
    <Fruits data={data}/>
    <h1>Count : {Count}</h1>
    <button onClick={()=>setCount((Count)=>Count+1)}>Increment</button>
  </div>
  </>
  )
}

export default App