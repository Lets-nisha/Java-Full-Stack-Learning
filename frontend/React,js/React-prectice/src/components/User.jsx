import React from 'react'

const User = (props) => {

    let { name, color, size } = props

    return (
        <>
            {/* <div>User Status</div>
            <div>
                <h1> {islogin ? <h3>Welcome User</h3> : <h3>Please Login</h3>} </h1>
                <h3>{islogin ? " Welcome User" : " Please Login"}</h3>
            </div> */}

            <div>
                <p style={{ color: color, fontSize: size, }}>{name}</p>

            </div>
        </>

    )
}

export default User