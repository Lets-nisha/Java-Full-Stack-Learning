import React from 'react'

const StudentDetails = ({ Name, Age, Course, Year, Semester, Batch }) => {
    return (
        <>
            <h2>Task 11th Nested Student Components </h2>
            <p>Name : {Name}</p>
            <p>Age : {Age}</p>
            <p>Course : {Course}</p>
            <p>Year : {Year}</p>
            <p>Semester : {Semester}</p>
            <p>Batch : {Batch}</p>
        </>
    )
}

export default StudentDetails