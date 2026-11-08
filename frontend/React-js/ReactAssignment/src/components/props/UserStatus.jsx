import React from 'react'

const UserStatus = ({ isOnline }) => {
    return (
        <>
            <h2>Task 9th Online Offline</h2>
            <p>{isOnline ? "Online" : "Ofline"}</p>
        </>
    )
}

export default UserStatus