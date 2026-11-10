import React from 'react'

const Student = (props) => {
    return (
        <>
            <h2>Task 1st : Student Information..!! </h2>
            <p>Name: {props.Name}</p>
            <p>Age: {props.Age}</p>
            <p>Course: {props.Course}</p>
            <p>City: {props.City}</p>
            
        </>
    )
}

export default Student