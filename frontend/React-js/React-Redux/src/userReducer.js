import { createReducer } from "@reduxjs/toolkit"

let initialState ={
  firstName:"Nisha",
  age: 19 ,
  status: "Dev"
}
// ------------------------------------------deficult way-----------------------------------------


// export default (state = initialState, action)=>{
//     if(action.type == "UPDATE_AGE"){
//     return { ...state, age: action.payload }
//     }else if(action.type == "UPDATE_NAME"){
//     return { ...state, firstName: action.payload }
//     }else if(action.type == "UPDATE_STATUS"){
//         return { ...state, status: action.payload }
//     }else{
//         return state
//     }
// }

// -----------------------------------------------easy way ------------------------------------------

export default createReducer(initialState,(builder)=>{
    builder.addCase("UPDATE_AGE",(state,action)=>{
        state.age = action.payload
    })
     .addCase("UPDATE_NAME",(state,action)=>{
        state.firstName = action.payload
    })
     .addCase("UPDATE_STATUS",(state,action)=>{
        state.status = action.payload
    })
})


// slice 