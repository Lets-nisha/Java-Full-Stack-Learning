import React from 'react'
import { useNavigate } from 'react-router-dom'

const Skills = () => {
    let navigate = useNavigate()

    return (
        <>
            <button onClick={() => { navigate('/about') }}>Go Back</button>
            <div>Skills</div>
        </>

    )
}

export default Skills