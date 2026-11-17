import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'

function ProductCard({ product }) {

    const { addToCart, cart } = useContext(CartContext)
    const { theme } = useContext(ThemeContext)

    const isAdded = cart.some(item => item.id === product.id)

    return (
        <div className={`product-card ${theme}`}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <button
                onClick={() => addToCart(product)}
                disabled={isAdded}
                className="add-btn"
            >
                {isAdded ? 'Added' : 'Add to Cart'}
            </button>

        </div>
    )
}

export default ProductCard