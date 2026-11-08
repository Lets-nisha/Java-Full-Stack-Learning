import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    // let [count, setCount] = useState(0)
    // let [dec, setDec] = useState(100)

    // console.log("Components Start");

    // useEffect(() => {
    //     console.log("UseEffect Hook Works...!!!");
    // }, [count, dec])

    // console.log("Components End");oo
    // --------------------------------------------------------------------------------

    // const [data, setData] = useState([])

    // async function getUser() {
    //     let result = await fetch("https://dummyjson.com/users")
    //     let res = await result.json()
    //     setData(res);
    // }

    // getUser()

    const [data, setData] = useState([])
    // const [loading, setloading] = useState("hwlo")

    useEffect(() => {
        async function getUser() {

            let res = await axios.get("https://dummyjson.com/users")
            // let res = await result.json()
            setData(res.data.users);
            console.log(res.data.users);
        }
        getUser()
    }, [])


    // useEffect(() => {
    //     async function getUser() {
    //         try {
    //             let result = await axios.get("https://dummyjson.com/users")
    //             // let result = await axios.get("https://dummyjson.com")
    //             setData(result.data.users);
    //             console.log(result.data.users);

    //         } catch (err) {
    //             console.log(err);


    //         }
    //     }

    //     getUser()
    // }, [])

    // console.log("Components Render");



    return (
        <>
            {/* {console.log("Jsx Render")}
            <h1>UseEffectHook</h1>
            <h2>Increment : {count}</h2>
            <h2>Decrement : {dec}</h2> */}

            {/* <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setDec(dec - 1) }}>Decrement</button> */}

            {/* <button onClick={() => { setCount(count == 0 ? count = 0 : count - 1) }}>Decrement</button> */}

            {/* // class components ke ander ek array metheod hota ha
        // useEffect without array dependence  */}

            {/* // --------------------------------------------------------------------- */}

            <div>

                {/* <div>{!data ? loading : data}</div> */}
                {data.map((item) => {
                    return (
                        <>
                            <div key={item.id}>
                                <h1>{item.id}</h1>
                                <h1><span>{item.firstName}</span><span>{item.lastName}</span></h1>
                                <h3>{item.email}</h3>
                                <h3>{item.password}</h3><hr />
                            </div>
                        </>
                    )
                })}

                {/* {data.map((item, idx) => {
                    return (
                        <>
                            <div key={idx}>
                                <h1><span>{item.firstName}</span><span>{item.lastName}</span></h1>
                                <h3>{item.email}</h3>
                                <h3>{item.password}</h3><hr />
                            </div>
                        </>
                    )
                })} */}


            </div>
        </>



    )
}

export default UseEffectHook