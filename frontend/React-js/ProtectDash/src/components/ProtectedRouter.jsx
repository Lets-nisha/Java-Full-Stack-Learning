import React from 'react'

const ProtectedRouter = ({children}) => {

  const user = localStorage.getItem("users");
  return children
}

export default ProtectedRouter