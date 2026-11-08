import React from 'react'
import ProductCardObj from './ProductCardObj'

const ProductObj = () => {
    let productObj = { Name: "Dell", Price: 2000, Brand: "Dell", Rating: "5 to 8" }

    return (
        <>
            <ProductCardObj productObj={productObj} />
        </>
    )
}

export default ProductObj