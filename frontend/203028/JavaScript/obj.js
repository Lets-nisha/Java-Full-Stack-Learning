let val = {
    firstName: "Nisha",
    lastName: "Bi",
    age:19,
    marks:[60,40,50],
    address:{
        city: "Delhi",
        pin: 244924
    },
    fullName:function(){
        console.log(`my name is ${this.firstName} ${this.lastName}`)
    }
}

console.log(val.age)
console.log(val.marks)
console.log(val.address.city, val.address.pin)
val.fullName()

let Destructureing = {
    "first Name": "Nisha",
    lastName: "Bi",
    age:19,
}
// -----------------------------------------------------------------------------------------------

let {lastName, firstName, age} = Destructureing;

console.log(firstName, lastName)
console.log(lastName)
console.log(age)

// -----------------------------------------------------------------------------------------------

let val1 = {
    firstName: "Nisha",
    lastName: "Bi",
    age:19,
}

// same kam 

val1.city = "kashmir"
val1["city"] = "kashmir"
console.log(val1)

val1.age = 67;
val1["age"] = 80
console.log(val1)

delete val1.city
val1["city"] = "kashmir"
console.log(val1)

// same kam 

// next

let val2 = {
   "first Name": "Nisha",
    lastName: "Bi",
    age:19,
    1 : "int",
    subject:'MERN'
}

val2.city = "kashmir1"
console.log(val1)

val2["age"] = 67;
val1["age"] = 80
console.log(val1)

let key = "subject"
console.log(val2[key]);


// -------------------------------------------------------------------------------------------------

// for in

for(let key in val2) {
console.log(`${key} : ${val2[key]}`)
}


// -------------------------------------------------------------------------------------------------

let studentAge = {
    rahul: 20,
    nisha: 15,
    kunal:12,
    tina: 24,
    neha:27
}
for(let key in studentAge) {
 if(studentAge[key] > 18)console.log(`${key} : ${studentAge[key]}`)
}
// -----------------------------------------------------------------------------------------------

// obj (.)

    // object.keys

// for (const element of object.keys) {
//   console.log(key)
// }

    // object.values

// for (let [key,values] of object.values(student)) {
//  console.log(`${key} : ${values}`)
// }

    // object.entries

// for (let [key,values] of object.entries(student)) {
//  console.log(`${key} : ${values}`)
// }


let teacher  = {
    firstName: "Nisha",
    lastName: "Bi",
    age:19,
    marks:[60,40,50],
    fullName:function(){
        console.log(`my name is ${this.firstName} ${this.lastName}`)
    }
}

// teacher.fullName()

let fullName = function(city, desti){
        console.log(`my name is ${this.firstName} ${this.lastName} city: ${city} desti : ${desti}`)
    }

let teacher2  = {
    firstName: "Neha",
    lastName: "Saini",
    age:19,
    marks:[60,40,50],
   
}

fullName.call(teacher, "bihar", "react dev")
fullName.apply(teacher2,[ "Mumbai", "react dev"])

// call , bind , apply
