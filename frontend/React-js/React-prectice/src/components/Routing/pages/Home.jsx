import React, { useEffect, useState } from 'react'

const Home = () => {
    const [num, setnum] = useState(0)
    useEffect(() => {
        document.title = `react : ${num}`
    }, [num])
    return (
        <>
            <div>Home</div>

            <h4>num val : {num}</h4>

            <button onClick={() => { setnum(num + 1) }}>increment</button>
        </>

    )
}

export default Home