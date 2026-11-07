import React from 'react'

const InfoArray = ({ ArrOfObj }) => {

    return (
        <>
            <div>Array of Object :</div>

            <div>

                <table border={1} cellPadding={10}>
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>STATUS</th>
                    </thead>

                    <tbody>
                        {
                            ArrOfObj.map((item, idx) => {
                                return (<tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.status}</td>

                                </tr>)
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default InfoArray