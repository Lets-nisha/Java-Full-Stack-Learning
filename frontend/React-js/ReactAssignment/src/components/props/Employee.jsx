import React from 'react'

const Employee = (props) => {
    return (
        <>
            <h2>Task 3rd : Employee Information..!!</h2>
            <p>Name: {props.Name}</p>
            <p>ID: {props.ID}</p>
            <p>Department: {props.Department}</p>
            <p>Salary: ${props.Salary}</p>
        </>
    )
}

export default Employee
