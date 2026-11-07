import React from 'react'

const User = (props) => {

    let name = props.Name
    let email = props.Email
    let age = props.Age
    let country = props.Country


    return (
        <>
            <h2>Task 4th : User Information use destructuring..!!</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
        </>
    )
}

export default User