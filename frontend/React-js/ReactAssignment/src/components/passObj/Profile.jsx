import React from 'react'

const Profile = ({ ProfileInfo }) => {
    return (
        <>
            <h2>Task 7th : Profile Information</h2>
            <p>Name: {ProfileInfo.Name}</p>
            <p>Age: {ProfileInfo.Age}</p>
            <p>Course: {ProfileInfo.Course}</p>
            <p>City: {ProfileInfo.City}</p>
        </>
    )
}

export default Profile