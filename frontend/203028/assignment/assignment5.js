let numbers = [10, 20, 30, 40, 50];

let res = numbers.map((item)=>{
    return item + 5
})

console.log(res)

// ----------------------------------------------------------------------------

let fruits = ["apple", "banana", "mango", "orange"];

let uppercase = fruits.map((upperCase)=>{
    return upperCase.toUpperCase()
})

console.log(uppercase)

// ----------------------------------------------------------------------------

let nums = [2, 4, 6, 8];

let multievrynum  = nums.map((multievrynums)=>{
    return multievrynums * 2
})

console.log(multievrynum)

// ----------------------------------------------------------------------------
// 4

let numberss = [1, 2, 3, 4, 5];

let squares = numberss.map(num => num ** 2);

console.log(squares)

// ----------------------------------------------------------------------------
// 5th 

let names = ["Rahul", "Amit", "Karan"];

let addfirstname = names.map((names)=>{
    return `Mr ${names}`
})

console.log(addfirstname)

// ----------------------------------------------------------------------------

let numbersConvert  = [100, 200, 300];

let ConvertString = numbersConvert.map((numsConvert)=>{
    return numsConvert.toString()
})

console.log(ConvertString)

// ----------------------------------------------------------------------------

// Question 7
// Find Cube of Each Number

    let cubesNum = [1, 2, 3, 4];

    let cubes = cubesNum.map(n => n ** 3);

    console.log(cubes);

// ----------------------------------------------------------------------------

let indexVal = [10, 20, 30, 40];

let indexValEvry = indexVal.map((indexVals, idx)=>{
    return `${idx} - ${indexVals}`
})

console.log(indexValEvry)

// ----------------------------------------------------------------------------

let namesDefLength = ["Raj", "Kunal", "Mohit", "Aman"];

let namesLength = namesDefLength.map((names)=>{
    return `${names} - ${names.length}`
})

console.log(namesLength)

// ----------------------------------------------------------------------------

let prices = [100, 250, 500, 1000];

let addSemprices = prices.map((item)=>{
    return `₹ ${item}`
})

console.log(addSemprices)

// ----------------------------------------------------------------------------

// PART 2 → Array of Objects Questions (10)
console.log("PART 2 → Array of Objects Questions (10)")


let students = [
    {name: "Rahul", marks: 80},
    {name: "Amit", marks: 90},
    {name: "Karan", marks: 70}
];


let dataStu = students.map((studentData)=>{
    return  studentData.name
})
console.log(dataStu)

// -------------------------------------------------------------------------------------------

let productsdata = [
    {name: "Laptop", price: 50000},
    {name: "Mobile", price: 20000},
    {name: "Tablet", price: 15000}
];

let product = productsdata.map((products)=>{
    return  products.price
})

console.log(product)

// -------------------------------------------------------------------------------------------

let studentsMarks = [
    {name: "Raj", marks: 60},
    {name: "Aman", marks: 70},
    {name: "Vikas", marks: 80}
];

let marks = studentsMarks.map((item)=>{
    return  item = item.marks += 10
})

console.log(marks)

// -------------------------------------------------------------------------------------------

let products = [
    {name: "laptop"},
    {name: "mobile"},
    {name: "watch"}
];

let productUppercase = products.map((item)=>{
    return item.name.toUpperCase()
})

console.log(productUppercase)


// ----------------------------------------------------------

let productsGST  = [
    {name: "TV", price: 20000},
    {name: "AC", price: 30000},
    {name: "Fridge", price: 25000}
];

let productsWithGST = productsGST.map((item) => {
    let gstAmount = item.price * 0.18; // 
    return { 
        ...item, 
        price: item.price + gstAmount 
    };
});

    console.log(productsWithGST)


    // -----------------------------------------------

    let users = [
    {name: "Raj", age: 20},
    {name: "Amit", age: 22}
];

let fullInfo = users.map((user) => {
    return `${user.name} is ${user.age} years old`;
});

console.log(fullInfo);


// ----------------------------------------------------------


let mobiles = [
    {brand: "Samsung", price: 30000},
    {brand: "Apple", price: 80000},
    {brand: "OnePlus", price: 40000}
];


let brands = mobiles.map((mobile)=>{
    return mobile.brand
})

console.log(brands)

// ----------------------------------------------------------

let employees = [
    {name: "Raj", salary: 20000},
    {name: "Amit", salary: 30000},
    {name: "Karan", salary: 40000}
];

let salaryDbl = employees.map((salarys)=>{
    return salarys.salary * 2
})

console.log(salaryDbl)

// ----------------------------------------------------------


let studentsData = [
    {name: "Raj", marks: 80},
    {name: "Aman", marks: 45},
    {name: "Kunal", marks: 90}
];

let result = studentsData.map(student => ({ ...student, status: student.marks >= 50 ? "Pass" : "Fail" })); 
console.log(result)

// ------------------------------------------------------------------

let productsData = [
    {name: "Shoes", price: 2000},
    {name: "Bag", price: 1500},
    {name: "Watch", price: 3000}
];

let discountedProducts = productsData.map((item) => {
    let discount = item.price * 0.10; 
    return {
        ...item,
        price: item.price - discount
    };
});
