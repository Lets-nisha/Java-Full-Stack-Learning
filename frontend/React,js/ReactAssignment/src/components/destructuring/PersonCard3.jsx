import React from 'react'

const PersonCard3 = (props) => {

    let name = props.Name
    let profession = props.Profession
    let age = props.Age
    let location = props.Location

    return (
        <>
            <h2>Person Card 2 use destructuring</h2>
            <p>Name: {name}</p>
            <p>Profession: {profession}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </>
    )
}

export default PersonCard3