import React from 'react'

const Fruits = (props) => {

    return (
        <>
            <div>Fruits</div>

            <ul>
                {
                    props.Fruits.map((item, idx) => {
                        return (
                            <li key={idx}>{item}</li>
                        )
                    })
                }
            </ul>

        </>

    )
}

export default Fruits