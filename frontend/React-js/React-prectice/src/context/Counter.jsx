import React, { memo } from 'react'
// import useCounter from './useCounter'

const Counter = ({data}) => {

  console.log("run functin")

    // let [count,Incre, Dicre] = useCounter()
  return (
   <>
   {/* <h1>mmmmmmmmmmm</h1> */}
   {/* <h1>{count} </h1>
   <button onClick={Incre}>Increment</button>
   <button onClick={Dicre}>Dicrement</button> */}
   </>
  )
}

export default memo(Counter) //based value 