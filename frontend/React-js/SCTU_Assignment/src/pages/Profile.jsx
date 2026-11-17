    import { useContext } from 'react'

import { UserContext } from '../context/UserContext'
import { ThemeContext } from '../context/ThemeContext'
import { CartContext } from '../context/CartContext'

function Profile() {

    const { user, updateName } = useContext(UserContext)
    const { theme } = useContext(ThemeContext)
    const { cart } = useContext(CartContext)

    return (
        <div className="profile-section">

            <h2>My Profile</h2>

            <div className="profile-card">

                <h3>{user.name}</h3>

                <p><strong>Email:</strong> {user.email}</p>

                <p><strong>Role:</strong> {user.role}</p>

                <p><strong>Theme:</strong> {theme}</p>

                <p><strong>Cart Items:</strong> {cart.length}</p>

                <button onClick={updateName} className="update-btn">
                    Update Name
                </button>

            </div>

        </div>
    )
}

export default Profile