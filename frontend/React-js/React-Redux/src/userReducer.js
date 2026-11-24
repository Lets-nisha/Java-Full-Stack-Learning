let initialState ={
  firstName:"Nisha",
  age: 19 ,
  status: "Dev"
}

export default (state = initialState, action)=>{
    if(action.type == "UPDATE_AGE"){
    return {
        ...state , age: action.payload
    }
    }
        return state
}