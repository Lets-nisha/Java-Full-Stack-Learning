import React, { memo } from 'react'

const Fruits = ({data}) => {
    console.log(`Fruits child component Call...!`)
  return (
    <>
    <ul>
         {data.map((elem, index)=><li key={index}>{elem}</li>)}
    </ul>
    </>
  )
}

export default memo(Fruits) 