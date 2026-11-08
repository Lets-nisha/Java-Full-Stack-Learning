import React from 'react'
import { useNavigate } from 'react-router-dom'

const Project = () => {
    let navigate = useNavigate()

    return (
        <>
            <button onClick={() => { navigate('/') }}>Go Back</button>
            <div>Project</div>
        </>

    )
}

export default Project