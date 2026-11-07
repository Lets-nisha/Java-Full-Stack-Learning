import React from 'react'

const StudentList = ({ studentInfo }) => {
    return (
        <>
            <h2>Task 14 StudentList Components</h2>
            <div>
                {studentInfo.map((studentInfo, idx) => (
                    <div key={idx}>
                        <h3>Name: {studentInfo.name}</h3>
                        <p>Price: ₹{studentInfo.price}</p>
                        <p>Brand: {studentInfo.brand}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default StudentList