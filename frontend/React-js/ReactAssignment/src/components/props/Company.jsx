import React from 'react'

const Company = (props) => {
  return (
    <>
      <h1>Task 17: Company Information with Props</h1>
      <h3>Name: {props.name}</h3>
      <p>Location: {props.location}</p>
      <p>Employees: {props.employees}</p>
      <p>Industry: {props.industry}</p>
      <p>Website: {props.website}</p>
    </>
  )
}

export default Company