import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'

function Home() {

    const { user } = useContext(UserContext)
    const { cart } = useContext(CartContext)
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`home-section ${theme}`}>

            <div className="welcome-section">
                <h1>Welcome, {user.name}! 👋</h1>

                <p>
                    Welcome to Shopping. Explore our products
                    and enjoy your shopping experience.
                </p>

                <Link to="/products" className="shop-btn">
                    Explore Products →
                </Link>
            </div>

            <div className="home-cards">

                <div className="home-card">
                    <h3>🛍️ Products</h3>
                    <h2>3</h2>
                    <p>Available Products</p>
                    <Link to="/products">View Products</Link>
                </div>

                <div className="home-card">
                    <h3>🛒 My Cart</h3>
                    <h2>{cart.length}</h2>
                    <p>Items in your cart</p>
                    <Link to="/cart">View Cart</Link>
                </div>

                <div className="home-card">
                    <h3>👤 My Profile</h3>
                    <h2>{user.name}</h2>
                    <p>{user.role}</p>
                    <Link to="/profile">View Profile</Link>
                </div>

            </div>

        </div>
    )
}

export default Home