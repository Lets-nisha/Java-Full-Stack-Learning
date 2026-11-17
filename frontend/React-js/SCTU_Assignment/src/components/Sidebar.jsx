
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import { UserContext } from '../context/UserContext'
import { ThemeContext } from '../context/ThemeContext'

function Sidebar() {

    const { user } = useContext(UserContext)
    const { theme } = useContext(ThemeContext)

    return (
        <aside className={`sidebar ${theme}`}>

            <div className="sidebar-user">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <span>{user.role}</span>
            </div>

            <nav className="sidebar-links">

                <NavLink to="/">🏠 Home</NavLink>

                <NavLink to="/products">🛍️ Products</NavLink>

                <NavLink to="/cart">🛒 Cart</NavLink>

                <NavLink to="/profile">👤 Profile</NavLink>

            </nav>

        </aside>
    )
}

export default Sidebar
