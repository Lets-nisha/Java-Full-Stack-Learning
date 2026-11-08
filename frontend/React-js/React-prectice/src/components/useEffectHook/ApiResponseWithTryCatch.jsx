import axios from 'axios';
import { useEffect, useState } from 'react'

const ApiResponseWithTryCatch = () => {

    const [userInfo, setUserInfo] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        async function getData() {
            try {
                let result = await axios.get("https://dummyjson.com/users");
                setUserInfo(result.data.users);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        getData()
    }, [])


    return (
        <>
            <h1>Task: UseEffect With Try & Catch | Date 3-Nov-2026</h1>

            <div>
                {loading ? (
                    <h2>Loading...</h2>
                ) : userInfo.length > 0 ? (
                    userInfo.map((user) => (
                        <div key={user.id}>
                            <h3>{user.firstName} {user.lastName}</h3>
                            <p>{user.email}</p><hr />
                        </div>
                    ))
                ) : (
                    <h2>Loading....</h2>
                )}
            </div>

        </>
    )
}

export default ApiResponseWithTryCatch