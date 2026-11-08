import React from 'react'

const StudentList = ({ studentInfo }) => {
    return (
        <>
            <h1>Task 14: Student List Using Props</h1>
            <div>
                {studentInfo.map((studentInfo, idx) => (
                    <div key={idx}>
                        <h3>Name: {studentInfo.name}</h3>
                        <p>Age: {studentInfo.age}</p>
                        <p>Course: {studentInfo.course}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default StudentList