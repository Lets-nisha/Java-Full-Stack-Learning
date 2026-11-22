
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then((res) => {
                setValues(res.data)
            })
            .catch((err) => console.log(err))
    }, [id])

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:3000/users/${id}`, values)
            .then(() => {
                alert("User Updated Successfully!")
                navigate("/")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="form-container">

            <h2>Update User</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={values.name || ""}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={values.username || ""}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={values.email || ""}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    value={values.phone || ""}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="website"
                    placeholder="Enter Website"
                    value={values.website || ""}
                    onChange={handleChange}
                />

                <button type="submit">
                    Update User
                </button>

            </form>

        </div>
    )
}

export default Update
