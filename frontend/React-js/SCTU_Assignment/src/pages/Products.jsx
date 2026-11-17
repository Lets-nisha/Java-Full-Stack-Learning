import React from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {

    const products = [
    {
        id: 1,
        name: "Laptop",
        price: 800,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        id: 2,
        name: "Phone",
        price: 500,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
        id: 3,
        name: "Headphones",
        price: 100,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    }
]

  return (
     <div className="product-section">

            <h2>Our Products</h2>

            <div className="product-grid">

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </div>
  )
}

export default Products