import React from 'react'

const OurInfo = (props) => {
    return (
        <>
            <div>OurInfo :</div>

            <div>
                <p>{props.info.name}</p>
                <p>{props.info.age}</p>
                <p>{props.info.status}</p>
            </div>
        </>
    )
}

export default OurInfo