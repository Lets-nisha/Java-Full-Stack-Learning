
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Read = () => {

    const { id } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.log("Error:", err))
    }, [id])

    return (
        <div className="read-wrapper">

            <div className="read-card">

                <Link to="/" className="read-back">
                    ← Back
                </Link>

                <h1>User Details</h1>
                <p className="read-subtitle">
                    View registered user information
                </p>


                <div className="read-details">

                    <div className="read-item">
                        <span>ID</span>
                        <strong>{user.id}</strong>
                    </div>

                    <div className="read-item">
                        <span>Name</span>
                        <strong>{user.name}</strong>
                    </div>

                    <div className="read-item">
                        <span>Username</span>
                        <strong>{user.username}</strong>
                    </div>

                    <div className="read-item">
                        <span>Email</span>
                        <strong>{user.email}</strong>
                    </div>

                    <div className="read-item">
                        <span>Phone</span>
                        <strong>{user.phone}</strong>
                    </div>

                    <div className="read-item">
                        <span>Website</span>
                        <strong>{user.website}</strong>
                    </div>

                    <div className="read-item full-width">
                        <span>Address</span>
                        <strong>
                            {typeof user.address === "object" && user.address !== null
                                ? `${user.address.street || ""}, ${user.address.city || ""}`
                                : `${user.address || ""}, ${user.city || ""}`
                            }
                        </strong>
                    </div>

                    <div className="read-item full-width">
                        <span>Gender</span>
                        <strong>
                            {user.gender}
                        </strong>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Read
