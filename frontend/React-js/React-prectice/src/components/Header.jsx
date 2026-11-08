import React from 'react'

const Header = (props) => {

    function demo() {
        console.log("clicked")
    }

    function demo2(num1, num2) {
        console.log(num1 + num2)
    }

    let obj = {
        color: "white",
        backgroundColor: "blue",
        padding: "10px",
        borderRadius: "8px"
    }

    return (
        <>
            <h1>Header...!!</h1>
            <p>{props.info.name}</p>
            <p>{props.info.age}</p>
            <p>{props.info.passion}</p>

            <button style={{ padding: "5px", borderRadius: "10px" }} onClick={demo}>click</button><br /><br />
            <button style={{ padding: "5px", borderRadius: "10px" }} onClick={() => { demo2(2, 3) }}>Show Val</button>

            <p style={{ color: "red", fontSize: "30px" }}>Hello Student..!!</p>
            <p style={obj}>hyee.....!!</p>

            <h1 className='heading'>react</h1>

        </>
    )
}

export default Header