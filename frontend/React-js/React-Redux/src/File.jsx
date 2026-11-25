import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const File = () => {
    let {firstName , age , status} = useSelector((state)=>{
        return state
    })

    let dispatch = useDispatch()

    let apdateAge = (age)=>{
        dispatch({type:"UPDATE_AGE", payload:age})
    }
     let apdateName = (firstName)=>{
        dispatch({type:"UPDATE_NAME", payload:firstName})
    }
     let apdateSatus = (status)=>{
        dispatch({type:"UPDATE_STATUS", payload:status})
    }
    
  return (
    <div>
        <h1>Name: {firstName}</h1>
        <button onClick={()=>{apdateName("Turk")}} >update</button>

        <h1>Age: {age}</h1>
        <button onClick={()=>{apdateAge(25)}}> update</button>

        <h1>Status: {status}</h1>
        <button onClick={()=>{apdateSatus("Eng")}}>update</button>

    </div>
  )
}

export default File