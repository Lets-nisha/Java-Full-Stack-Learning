import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    let navigate = useNavigate()
    return (
        <>
            <button onClick={() => { navigate('/') }}>Go Back</button>
            <div>About</div>
        </>
    )
}

export default About