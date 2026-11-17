import React, { useContext } from 'react'

import { data } from '../../App'

const Child3 = () => {
    let name = useContext(data)
  return (
    <div>{name}</div>
  )
}

export default Child3