import React from 'react'

const PersonCard2 = (props) => {
    let name = props.Name
    let Profession = props.Profession
    let age = props.Age
    let location = props.Location

    return (
        <>
            <h2>Person Card 2 use destructuring</h2>
            <p>Name: {name}</p>
            <p>Profession: {Profession}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </>
    )

}
export default PersonCard2