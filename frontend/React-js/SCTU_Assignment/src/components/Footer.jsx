import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'

function Footer() {

    const { theme } = useContext(ThemeContext)
    const { user } = useContext(UserContext)
    const { cart } = useContext(CartContext)

    return (
        <footer className="footer">

            <p>Current Theme: {theme}</p>

            <p>Logged User: {user.name}</p>

            <p>Items: {cart.length}</p>


        </footer>
    )
}

export default Footer