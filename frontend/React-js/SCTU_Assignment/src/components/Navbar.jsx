import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'

function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const { user } = useContext(UserContext)
    const { cart } = useContext(CartContext)

    return (
        <nav className="navbar">

            <h2 className="logo">Shopping</h2>

            <div className="nav-right">

                <span>Welcome, {user.name}</span>

                <a href="#cart" className="cart-count">
                    Cart ({cart.length})
                </a>

                <button onClick={toggleTheme} className="theme-btn">
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>

            </div>

        </nav>
    )
}

export default Navbar