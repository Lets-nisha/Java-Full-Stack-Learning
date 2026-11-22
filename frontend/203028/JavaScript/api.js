let value = true

let prmise = new Promise((resolve, reject) => {
    if(value){
        resolve("Promise ")
    }else{
        reject("Promise reject")
    }
});

console.log(prmise)

// -------------------------------------------------------------------------

function arr(value){
return new Promise((resolve, reject) => {
    if(value){
        resolve("Promise done")
    }else{
        reject("Promise reject")
    }
})
}

arr(false).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

// -------------------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
    return result.json()
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
});

// ---------------------------------------------------------------------------

let btn = document.getElementById("btn")

function handleData(){
    let firstName= document.getElementById("name").value 
    let email= document.getElementById("email").value 
    let pass= document.getElementById("pass").value 


    let frmData={
        firstName,
        email,
        pass
    }

    fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{
        "Content-type": "Appication/json"
    },
    body: JSON.stringify(frmData)
    }).then((res) => {
    return res.json()
    }).then((result) => {
    console.log(result)
    })

}

console.log(handleData())