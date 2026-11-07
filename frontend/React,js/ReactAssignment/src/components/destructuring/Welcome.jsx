import React from 'react'

const Welcome = ({ name = "Guest" }) => {
    return (
        <>
            <h2>Task 12th Default Props</h2>
            <div>Welcome, {name}</div>
        </>
    )
}

export default Welcome


