import React from 'react'
import StudentDetails from './StudentDetails'

const StudentChild = ({ Name, Age, Course, Year, Semester, Batch }) => {


    return (
        <>
            <StudentDetails Name={Name} Age={Age} Course={Course} Year={Year} Semester={Semester} Batch={Batch} />

        </>
    )
}

export default StudentChild