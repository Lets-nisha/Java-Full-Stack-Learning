import React from 'react'

const Product = (props) => {
    return (
        <>
            <h2>Task 2nd : Product Information..!!</h2>
            <p>Product: {props.Product}</p>
            <p>Brand: {props.Brand}</p>
            <p>Price: ${props.Price}</p>
            <p>Category: {props.Category}</p>
        </>
    )
}

export default Product