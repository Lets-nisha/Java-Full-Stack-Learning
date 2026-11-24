import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const File = () => {
    let {firstName , age , status} = useSelector((state)=>{
        return state
    })

    let dispatch = useDispatch()

    let apdateAge = (Age)=>{
        dispatch({type:"UPDATE_AGE", payload:Age})
    }
    
  return (
    <div>
        <h1>Name: {firstName}</h1>
        <button>update</button>

        <h1>Age: {age}</h1>
        <button onClick={apdateAge}> update</button>

        <h1>Status: {status}</h1>
        <button>update</button>

    </div>
  )
}

export default File