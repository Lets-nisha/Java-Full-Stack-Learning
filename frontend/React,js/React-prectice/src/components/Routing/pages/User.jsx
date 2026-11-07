import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {
    let navigate = useNavigate()

    let { id } = useParams() //destraucturing
    console.log(id);

    return (
        <>
            <button onClick={() => { navigate('/') }}>Go Back</button>
            <h1>User: {id}</h1>
        </>
    )
}

export default User