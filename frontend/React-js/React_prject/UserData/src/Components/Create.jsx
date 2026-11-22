
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    city: "",
    gender: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/users", values)
      .then((res) => {
        
        console.log("User Created:", res.data);
        console.log(res.data.address)
        navigate("/");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    
    <div className="create-wrapper">
      <div className="create-card">

        <h1>Create User</h1>
        <p className="create-subtitle">
          Add a new user to your dashboard
        </p>

        <form onSubmit={handleSubmit}>

          <div className="create-input-group">
            <fieldset>
              <legend>Name</legend>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handleChange}
                required
              />
            </fieldset>
          </div>

          <div className="create-input-group">
            <fieldset>
              <legend>Username</legend>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={values.username}
                onChange={handleChange}
                required
              />
            </fieldset>
          </div>

          <div className="create-input-group">
            <fieldset>
              <legend>Email</legend>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </fieldset>
          </div>

          <div className="create-input-group">
            <fieldset>
              <legend>Phone</legend>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone"
                value={values.phone}
                onChange={handleChange}
                required
              />
            </fieldset>
          </div>

          <div className="create-input-group">
            <fieldset>
              <legend>Website</legend>
              <input
                type="text"
                name="website"
                placeholder="Enter Website"
                value={values.website}
                onChange={handleChange}
                required
              />
            </fieldset>
          </div>

          <div className="create-input-group">
            <fieldset>
              <legend>Address</legend>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={values.address.street}
                onChange={handleChange}
                required
              />
            </fieldset>
          </div>

          <div className="create-input-group">
            <fieldset>
              <legend>City</legend>
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={values.address.city}
                onChange={handleChange}
                required
              />
            </fieldset>


          </div>
          
          <div className="create-input-group">

            <fieldset>
            <legend>Gender</legend>

            <select
              name="gender"
              value={values.gender}
              onChange={handleChange}
              required
            >
              <option disabled  value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>
          </div>

        

          <button type="submit" className="create-btn">
            Create User
          </button>

          <Link to="/" className="create-back">
            ← Back to Home
          </Link>

        </form>
      </div>
    </div>
  );
};

export default Create;
