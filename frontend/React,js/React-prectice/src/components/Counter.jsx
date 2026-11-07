import React, { useState } from 'react'

const Counter = () => {
    const [show, setShow] = useState(false)
    const [Name, setName] = useState("Helo Nisha")
    const [color, setColor] = useState("white")
    const [fruits, setAddFruites] = useState(["Apple",
        "Banana"])

    function addFruites() {
        setAddFruites([...fruits, "Mango"])
    }

    return (
        <>
            <div>Counter: {show ? "on" : "off"}</div>
            <button onClick={() => { setShow(!show) }}>{show ? "Off" : "On"}</button><br /><br /><hr />


            <div>{Name ? "Hii React Developer : " : ""}</div>
            <button onClick={() => { setName(!Name) }}>{Name ? "Hide" : "Show"}</button><br /><br /><hr />


            <div style={{ width: "200px", height: "100px", border: "2px solid black", padding: "10px", backgroundColor: color }}>
                {/* <h1>{color}</h1> */}

                <div style={{ display: "flex", gap: "5px" }}>

                    <button style={{ padding: "5px", }} onClick={() => { setColor("red") }}>Red</button>
                    <button style={{ padding: "5px", }} onClick={() => { setColor("blue") }}>Blue</button>
                    <button style={{ padding: "5px", }} onClick={() => { setColor("green") }}>Green</button>

                </div>

            </div><br />



            <br />
            <br />

            <div>{fruits.map((fruit, idx) => {
                return (
                    <h3 key={idx}>{fruit}</h3>

                )

            })}</div>

            <button onClick={() => { addFruites() }}>Add Fruits</button>

            {/* control components next topic */}
        </>
    )
}

export default Counter