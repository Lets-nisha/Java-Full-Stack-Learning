
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:3000/users")
            setUsers(res.data)
        } catch (error) {
            console.log("Error:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loader"></div>
                <p>Loading users...</p>
            </div>
        )
    }

    return (

        <div className="dashboard">

            {/* Header */}
            <header className="header">
                <div className="logo">
                    <span className="logo-icon">U</span>
                    <h2>User<span>Hub</span></h2>
                </div>

                <div className="profile">
                    <div className="profile-avatar">A</div>
                    <span>Admin</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">

                {/* User Table */}
                <section className="users-section">

                    <div className="table-header">
                        <div>
                            <h2>User Management</h2>
                            <p>View and manage all registered users.</p>
                        </div>

                        <Link to="/create" className="add-btn">
                            <span>+</span> Add New User
                        </Link>
                    </div>

                    <div className="table-responsive">

                        <table className="user-table">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Username</th>
                                    <th>Email Address</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                                {users.length > 0 ? (
                                    users.map((user) => (

                                        <tr key={user.id}>

                                            <td>
                                                <span className="user-id">
                                                    {user.id}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="user-info">

                                                    <span>{user.name}</span>
                                                </div>
                                            </td>

                                            <td>{user.username}</td>

                                            <td>{user.email}</td>

                                            <td>
                                                {typeof user.address === "object"
                                                    ? user.address?.city || "N/A"
                                                    : user.city || "N/A"
                                                }
                                            </td>

                                            <td>
                                                <div className="action-buttons">

                                                    <Link
                                                        to={`/read/${user.id}`}
                                                        className="action-btn read-btn"
                                                    >
                                                        Read
                                                    </Link>

                                                    <Link
                                                        to={`/update/${user.id}`}
                                                        className="action-btn edit-btn"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        className="action-btn delete-btn"
                                                        type="button"
                                                        title="Delete functionality not connected yet"
                                                    >
                                                        Delete
                                                    </button>

                                                </div>
                                            </td>

                                        </tr>

                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="empty-state">
                                            No users found.
                                        </td>
                                    </tr>
                                )}

                            </tbody>

                        </table>

                    </div>

                    {/* <div className="table-footer">
                        Showing {users.length} registered users
                    </div> */}

                </section>

                <footer className="footer">
                    © 2026 UserHub. All rights reserved.
                </footer>

            </main>

        </div>
    )
}

export default Home
