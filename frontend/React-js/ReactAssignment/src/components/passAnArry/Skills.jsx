import React from 'react'

const Skills = ({ skills }) => {
    return (
        <>
            < h2>Task 6th : Skills Information..!!</h2>
            {skills.map((skill, index) => (
                <div key={index} >
                    <span>{index + 1} : {skill}</span>
                </div >
            ))}
        </>
    )
}

export default Skills