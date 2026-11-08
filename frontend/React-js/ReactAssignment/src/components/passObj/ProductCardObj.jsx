import React from 'react'

const ProductCardObj = ({ productObj }) => {
    return (
        <>
            <h2>Task 8th ProductCardObj components hold product value</h2>
            <p>Product Name: {productObj.Name}</p>
            <p>Product Price: {productObj.Price}</p>
            <p>Product Brand: {productObj.Brand}</p>
            <p>Product Rating: {productObj.Rating}</p>
        </>
    )
}

export default ProductCardObj