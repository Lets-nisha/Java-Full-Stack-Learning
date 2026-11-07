import React from 'react'

const ProdectLists = ({ products }) => {


    return (
        <>
            <h2>Task 13 ProdectLists</h2>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>Name: {product.name}</h3>
                        <p>Price: ₹{product.price}</p>
                        <p>Brand: {product.brand}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProdectLists