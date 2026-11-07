
import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        gender: "",
        anotherAddress: "",
        otherName: "",
        confirmation: false
    });

    const [show, setShow] = useState(null);

    const handleChange = (e) => {
        let { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

        s
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setShow({ ...formData });

    };

    return (
        <>
            <h1>Form</h1>

            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>

                <form onSubmit={submitHandler}
                    style={{ width: "400px" }}>

                    <fieldset>
                        <legend>Enter Your Name</legend>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Your Name"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Enter Your Address</legend>
                        <input
                            required
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter Your Address"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>City & State</legend>

                        <select
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                        >
                            <option value="">Select City</option>
                            <option value="Noida">Noida</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Rampur">Rampur</option>
                            <option value="Muradabad">Muradabad</option>
                            <option value="Ghaziabad">Ghaziabad</option>
                        </select>

                        <select
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleChange}
                        >
                            <option value="">Select State</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="New York">New York</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Odisha">Odisha</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <legend >Gender</legend>

                        <input
                            id="female"
                            required
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === "Female"}
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>

                        <input
                            id="male"
                            required
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === "Male"}
                            onChange={handleChange}
                        />
                        <label htmlFor="male">Male</label>
                    </fieldset>

                    <fieldset>
                        <legend>Enter Another Address</legend>
                        <input
                            required
                            type="text"
                            name="anotherAddress"
                            value={formData.anotherAddress}
                            onChange={handleChange}
                            placeholder="Enter Address"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Confirmation</legend>
                        <input
                            required
                            type="checkbox"
                            name="confirmation"
                            checked={formData.confirmation}
                            onChange={handleChange}
                        />
                        <span> All are correct</span>
                    </fieldset>

                    <button type="submit">Submit</button>
                </form>


            </div>
            <div>
                <h2>Submitted Data</h2>
                {show && (
                    <>
                        <p>Name: {show.name}</p>
                        <p>Address: {show.address}</p>
                        <p>City: {show.city}</p>
                        <p>State: {show.state}</p>
                        <p>Gender: {show.gender}</p>
                        <p>Another Address: {show.anotherAddress}</p>
                        <p>Confirmation: {show.confirmation ? "Yes" : "No"}</p>
                    </>
                )}
            </div>
        </>
    );
};

export default Form;


