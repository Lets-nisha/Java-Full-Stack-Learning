import React, { useState } from 'react'

const Day5 = () => {

    // --------------------------------------------------------------------------------------------------------------------

    // multi input single state

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     password: ""
    // })

    // let handleChange = (e) => {
    //     let { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });

    // {password:"", emial:"", name:""}
    // {name:"Nisha", emial:"nisha@example.com", password:"123456"}

    // }

    // function showData() {
    //     console.log(formData);
    // }
    // -----------------------------------------------------------------------------------------------------------------------

    // multi inp multiple state

    // const [name, setName] = useState("");
    // const [show, setShow] = useState("")
    // const [password, setPassword] = useState("")
    // const [email, setEmail] = useState("")

    // function showData() {
    //     let data = {
    //         name: name,
    //         email: email,
    //         password: password
    //     }
    //     console.log(data);

    //     setShow(name + " " + email + " " + password);
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    // }
    // ----------------------------------------------------------------------------------------------------------------------------------------

    // single source of truth
    // object of assign

    return (
        <>

            {/* ------------------------------------------------------------------------------------------------------------------------------------ */}
            {/* 
    // multi input single state

            <input type="text" name="name" id="" placeholder='Enter your name' name="name" value={formData.name}
                onChange={handleChange} /><br /><br />
            <input type="password" name="password" id="" placeholder='Enter your password' name="password" value={formData.password}
                onChange={handleChange} /><br /><br />
            <input type="text" name="email" id="" placeholder='Enter your email' name="email" value={formData.email}
                onChange={handleChange} /><br /><br />
            <button onClick={showData}>Submit</button> */}
            {/* -------------------------------------------------------------------------------------------------------------------------------*/}

            {/* 
    // multi inp multiple state

            <div>
                <h1>User Form</h1>
                <form onSubmit={(e) => { e.preventDefault(); }}
                    border="2px solid black" style={{
                        width: "400px", margin: "auto",
                        padding: "20px",
                        backgroundColor: "lightblue"
                    }}>
                    <div>{show}</div>
                    <fieldset>
                        <legend>Enter Name</legend>
                        <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Enter your name' value={name} />

                    </fieldset>

                    <fieldset>
                        <legend>Enter Email</legend>
                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Enter your email' value={email} />
                    </fieldset>

                    <fieldset>
                        <legend>Enter Password</legend>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Enter your password' value={password} />
                    </fieldset>

                    <button onClick={showData} type='submit'>Submit</button>

                </form>
            </div> */}

            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
        </>
    )
}

export default Day5