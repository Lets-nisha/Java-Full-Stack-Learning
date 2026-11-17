import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'
import CartItem from '../components/CartItem'

function Cart() {

    const { cart, clearCart, removeFromCart } = useContext(CartContext)
    const { theme } = useContext(ThemeContext)

    const total = cart.reduce((sum, item) => {
        return sum + item.price
    }, 0)

    return (
        <div className={`cart-section  ${theme}`}>

            <h2>Shopping Cart</h2>

            {cart.length === 0 ? (

                <p>Your cart is empty!</p>

            ) : (

                <>
                    {cart.map((item) => {
                        return (
                            <>
                                <div key={item.id} className='cart-item'>

                                    <CartItem
                                        item={item}
                                    />

                                    <button
                                        type="button"
                                        className="remove-btn"
                                        onClick={() => {
                                            console.log("Deleting ID:", item.id)
                                            removeFromCart(item.id)
                                        }}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </>
                        )
                    })}

                    <div className="cart-total">

                        <h3>Total: ${total}</h3>

                        <button
                            onClick={clearCart}
                            className="clear-btn"
                        >
                            Clear Cart
                        </button>

                    </div>
                </>

            )}

        </div>
    )
}

export default Cart