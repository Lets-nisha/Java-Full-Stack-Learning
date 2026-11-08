import React from 'react'

const ProfileCard = (props) => {
    return (
        <>
            <h2>Task 10th ProfileCard </h2>
            <p>Name: {props.Name}</p>
            <p>Profession: {props.Profession}</p>
            <img style={{ width: 500 }} src={props.img} alt="" />
        </>
    )
}

export default ProfileCard