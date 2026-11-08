import React from 'react'

const PersonCard = (props) => {
    let name = props.Name
    let Profession = props.Profession
    let age = props.Age
    let location = props.Location


    return (
        <>
            <h2>Task 5th : Person Card use destructuring</h2>
            <p>Name: {name}</p>
            <p>Profession: {Profession}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </>
    )
}

export default PersonCard