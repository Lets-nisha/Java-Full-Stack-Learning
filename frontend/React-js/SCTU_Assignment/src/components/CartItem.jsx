import { useContext } from 'react'

import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'

function CartItem({ item }) {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={`cart-item ${theme}`}>

            <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
            </div>


        </div>
    )
}

export default CartItem