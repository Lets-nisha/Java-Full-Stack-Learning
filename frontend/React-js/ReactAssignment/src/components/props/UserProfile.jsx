import React from 'react'

const UserProfile = (props) => {
  return (
    <>
      <h1>Task 18: Address Object Through Props</h1>

      <h3>Name: {props.user.name}</h3>
      <p>Email: {props.user.email}</p>

      <h3>Address Details</h3>
      <p>City: {props.user.address.city}</p>
      <p>State: {props.user.address.state}</p>
      <p>Country: {props.user.address.country}</p>
    </>
  )
}

export default UserProfile