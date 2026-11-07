// let heading = document.querySelector("#heading");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     heading.innerHTML = "Nisha"
//     console.log(heading);
// })

// re-declaration or re-initaization both
// var firstName = "Nisha";
// var firstName = "Turk";
// firstName = "Nisha";

// can't re-declaration but  re-initaization allow
// let firstName = "Nisha";
// let firstName = "Turk";
// firstName = "Nisha";

// can't re-declaration or re-initaization both
// const firstName = "Nisha";
// const firstName = "Turk";
// firstName = "Nisha";

// console.log("Arithmatic opt ")

// let a1 = 2;
// let b1 = 3;

// console.log(5 + 5);
// console.log(5 - 5);

// console.log(5 / 5);
// console.log(5 % 5);
// console.log(5 * 5);

// console.log(5 != 5);
// console.log(5 !== 5);

// console.log("Comparision opt ")

// let a = 5;
// let b = 5;

// console.log(5 == 5);
// console.log(5 === 5);

// console.log(5 > 5);
// console.log(5 < 5);
// console.log(5 >= 5);
// console.log(5 <= 5);

// console.log(5 != 5);
// console.log(5 !== 5);

// console.log("Strings Output")

// console.log(5 == "5");
// console.log(5 === "5");

// console.log(5 > "5");
// console.log(5 < "5");
// console.log(5 >= "5");
// console.log(5 <= "5");

// console.log(5 != "5");
// console.log(5 !== "5");

// console.log("Assignment Opt")

// let a2 = 6;
// a2 = a2 += 2;

// let a3 = 6;
// a3 = a3 -= 2;

// let a4 = 6;
// a4 = a4 *= 2;

// let a5 = 6;
// a5 = a5 /= 2;

// let a6 = 6;
// a6 = a6 %= 2;

// console.log(a2)
// console.log(a3)
// console.log(a4)//
// console.log(a5)
// console.log(a6)

// console.log("Incre and Decre Opt")

// let aa = 4;

// console.log("Increment")
// console.log(aa++)
// console.log(aa)

// let aa1 = 4;
// console.log(++aa1)
// console.log(aa1)

// console.log("Decrement")

// let bb = 5;
// console.log(bb--)
// console.log(bb)

// let bb1 = 5;
// console.log(--bb1)
// console.log(bb1)

// console.log("Logical Opt")

// // And {&&} OR{||} and Not{!}

// let opt = 20;
// console.log(opt > 12 && opt < 20)
// console.log(opt > 12 || opt < 20)
// console.log(!(opt > 12))


// console.log("Ternary Opt")
// let a = 20;
// let b = 25;
// let c = a > 15 ? "yes" : "no"
// let d = a < 15 ? "yes" : "no" /
//     console.log(c)
// console.log(d)

// let age = prompt("Enter Your Age :");

// if (age > 18) {
//     console.log("you can vote")

// } else (
//     console.log("you can not vote")

// )

// let marks = Number(prompt("Enter Marks"))

// if (marks > 90) {
//     console.log("Grade A")

// } else if (marks > 80) {
//     console.log("Grade B")
// }
// else if (marks > 60) {
//     console.log("Grade C")
// }
// else if (marks > 50) {
//     console.log("Grade D")
// }
// else if (marks > 40) {
//     console.log("Pass")
// }
// else (
//     console.log("Fail")

// )

// let age = parseInt(prompt("Enter you age and check "))
// let licence = true;

// if (age > 18) {
//     if (licence == true) {
//         console.log("you can drive")
//     } else {
//         console.log("you can't drive")
//     }
// } else {
//     console.log("you are under 18")
// }

// switch case

// let day = parseInt(prompt("Enter your day number"))

// if (day == 1) {
//     console.log("sunday")
// } else if (day == 2) {
//     console.log("Monday")
// } else if (day == 2) {
//     console.log("Teusday")
// } else if (day == 3) {
//     console.log("Wednesday")
// } else if (day == 4) {
//     console.log("Thursday")
// } else if (day == 5) {
//     console.log("Friday")
// } else if (day == 6) {
//     console.log("Saturday")
// } else {
//     console.log("End of Weak")
// }


// let months = parseInt(prompt("Enter month number"))

// switch (months) {
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("Fev")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("Apr")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("Jun")
//         break;
//     case 7:
//         console.log("July")
//         break;
//     case 8:
//         console.log("Aug")
//         break;
//     case 9:
//         console.log("Sep")
//         break;
//     case 10:
//         console.log("Oct")
//         break;
//     case 11:
//         console.log("Nov")
//         break;
//     case 12:
//         console.log("Dec")
//         break;
//     default:
//         console.log("End of months")
// }

// function ----------------------------------------------------------------->>

// 1. Regular function
//   a) regular function
//   b) regular function with argument and perameter
//   c) regular function with return keyword
//    syntax(   function declearation
//              function greet (){
//                      console.log("Helo Students.. !!")
//                  }
//           )
//          greet()     invocation

// 2. Function Exoression
// 3. Arrow function
// ----------------------------------------------------------------------------------------------------/./
// function greet() {
//     console.log("helo")
// }

// greet()

// ----------------------------------------------------------------------------------------------------/./

// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add(2, 5)

// -----------------------------------------------------------------------------------------------------/./

// function greet(name) {
//     return "Hello, " + name;
// }
// let message = greet("Alice");

// console.log(message)

// --------------------------------/./

// function add() {
//     console.log("hye");
// }

// let result = add();
// console.log(result)

// jab hum return nhi krte ha tab javaScript automatically undefine return kr deti hai

// ------------------------------------------------------------------------------------------------------/./

// 2. Function Expression

// let greet = function (num1, num2) {
//     console.log("hello Student");
//     return num1 + num2
// }

// let sum = greet(5, 8)
// console.log(sum)

// ------------------------------------------------------------------------------------------------------/./
// // 3. Arrow function

// let greet = (num, num1) => {
//     return num + num1
// }

// let sum = greet(5, 8)
// console.log(sum)


// let greet = firstName => {
//     return `Hello ${firstName}`
// }

// let Name = greet("Nisha")
// console.log(Name)

// ------------------------------------------------------------------------------------------------------/./
// tamplate string (tamplaters)


// for loop startPoint / endPoint
// initialization / condition / incre + decre


// table in function

// function table(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${2 * i}`);
//     }
// }

// let data = parseInt(prompt("Enter a number: "))

// table(data)

// function evenNum(even) {
//     for (let i = 1; i <= even; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// let evennum = parseInt(prompt("Enter number : "))

// evenNum(evennum)

// let sum = 0;

// function sumNum(num) {
//     for (let i = 1; i <= num; i++) {
//         sum = sum + i;
//     }
// }

// let sumNumData = parseInt(prompt("Enter number : "))

// sumNum(sumNumData)
// console.log(sum)

// while loop-------------------------------------------------------------------------------->>>>>

// print table of 2

// let i = 1;

// while (i <= 10) {
//     console.log(`2 x ${i} = ${2 * i}`);
//     i++;

// }

// ------------------------------------------------------------------------------------------->>>>>>

// let count = 0

// let num = 123

// while (num > 0) {
//     let digit = num % 10
//     count + 1
//     num = (num - digit) / 10
// }

// console.log(count)

// ------------------------------------------------------------------------------------------------>>>>
// let headings = document.querySelector("#heading");

// let student = ["Nisha", 20, true];
// console.log(student.length);

// for (let i = 0; i < student.length; i++) {
//     console.log(student[i]);
// }

// console.log(`${studentinfo[0].name} is ${studentinfo[0].age} years old and is a student: ${studentinfo[0].isStudent}`);
// headings.innerHTML = `${studentinfo[0].name} is ${studentinfo[0].age} years old and is a student: ${studentinfo[0].isStudent} and has ${studentinfo[0].marks} marks.`;

// -----------------------------------------------------------------------------------------------------
// let studentinfo = [{
//     name: "Nisha",
//     age: 20,
//     marks: 90,
//     isStudent: true
// },
// {
//     name: "Neha",
//     age: 20,
//     marks: 85,
//     isStudent: false
// },
// {
//     name: "Nishma",
//     age: 20,
//     marks: 90,
//     isStudent: true
// }];

// for (let i = 0; i < studentinfo.length; i++) {
//     console.log(`${studentinfo[i].name} is ${studentinfo[i].age} years old and is a student: ${studentinfo[i].isStudent} and has ${studentinfo[i].marks} marks.`);
// }

// --------------------------------------------------------------------------------------------------------------
// let heading = document.querySelector("#heading");
// let user = [
//     {
//         id: 1,
//         name: "Nisha1",
//         age: 25,
//         selary: 50000,
//         city: "Pune"
//     },
//     {
//         id: 2,
//         name: "Nisha2",
//         age: 28,
//         selary: 80000,
//         city: "Mumbai"
//     },
//     {
//         id: 3,
//         name: "Nisha3",
//         age: 27,
//         selary: 10000,
//         city: "Noida"
//     }
// ]


// for (let i = 0; i < user.length; i++) {
//     if (user[i].selary > 25000) {
//         console.log(`${user[i].name} is ${user[i].age} years old and has selary ${user[i].selary} and lives in ${user[i].city}`);
//     } else {
//         console.log("User selary is less than 25000", user[i].name);
//     }
// }

// total sum all user selary
// let totalSelary = 0;
// for (let i = 0; i < user.length; i++) {
//     totalSelary += user[i].selary;
// }
// console.log("Total salary of all users:", totalSelary);

// highest selary user
// let highestSelaryUser = user[0];

// for (let i = 0; i < user.length; i++) {
//     if (user[i].selary > highestSelaryUser.selary) {
//         highestSelaryUser = user[i];
//     }
// }
// console.log("User with the highest salary:", highestSelaryUser);

// avg age all users

// let totalAge = 0;
// for (let i = 0; i < user.length; i++) {
//     totalAge += user[i].age;
// }
// let avgAge = totalAge / user.length;
// console.log("Average age of all users:", parseInt(Number(avgAge)));

// -------------------------------------------------------------------------------------------------------------
// optional chaining

// array of mathods
// sort , reverse  push, pop, unshift, shift

// 1
// let arr = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// arr.sort()
// console.log("Sort", arr);
// // 2
// let arr1 = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// arr1.reverse()
// console.log("Reverse", arr1);
// // 3
// let arr2 = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// arr2.push()
// console.log("Push", arr2);
// // 4
// let arr3 = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// arr3.pop()
// console.log("Pop", arr3);
// // 5
// let arr4 = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// arr4.unshift()
// console.log("unShift", arr4);
// // 6
// let arr5 = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// arr5.shift()
// console.log("Shift", arr5);
// // 7
// let b = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// let c = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// let d = arr.concat(b, c)
// console.log("Concat", d);
// // 8
// let b1 = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// b11 = b1.join("-")
// console.log("Join", b11);
// // 9
// let arrr = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// let arrr2 = ["NishaBi"]
// console.log("Condition", Array.isArray(arr2));
// // 10
// let b12 = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// bb1 = b12.slice(1)
// console.log("Slice", bb1); // starting point | ending point
// // 11
// let splicediv = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// splicediv.splice(1, 0, "Nishaturk")
// console.log("Splice", splicediv); //strting point | how many del | new val
// // 12
// // includes (conditon related)
// let include = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// let exits = include.includes("Nisha")
// console.log(exits);
// // 13
// let idx = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// console.log(idx.indexOf("Nisha4"))
// // 14
// let lastIdx = ["Nisha1", "Nisha2", "Nisha3", "Nisha4"]
// console.log(lastIdx.lastIndexOf("Nisha3"))

// ----------------------------------------------------------------------------------------------------------------

//callBack Function
// function parent(data) {
//     let a = data("Nisha")
//     return a
// }

// HOF
// let result = parent((name) => {
//     return `Hello ${name}`
// })

// console.log(result);
// --------------------------------------------------------------------------------------------------------

// solve quetion                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let arr = ["nisha", "nisha1", "nisha2", "nisha3"]

// let result = arr.map((item) => {
//     return `Mis ${item}`
// })
// console.log(result);

// --------------------------------------------------

// // multiple

// let arr2 = [2, 4, 5, 6, 7, 8]

// let resultData = arr2.map((item) => {
//     return item * 2
// })
// console.log(resultData);
// -------------------------------------------------------

// let arr22 = [2, 4, 5, 6, 7, 8]

// let resultData = arr22.map((item.index) => {
//     return item * 2
// })
// console.log(resultData);

// ----------------------------------------------------------

// let arr2 = [2, 4, 5, 6, 7, 8]

// let resultData = arr2.map((item, index) => {
//     return `${item + index}`
// })
// console.log(resultData);
// ---------------------------------------------------------

// let arr2 = [2, 4, 5, 6, 7, 8]

// let resultData = arr2.map((item, index) => {
//     if (item % 2 == 0) {
//         console.log("even");

//     } else {
//         console.log("odd");

//     }
//     return item % 2 == 0 ? "even" : "odd"
// })
// console.log(resultData);
// ---------------------------------------------------------


// let arr2 = ["Nishaturkey", "nisha2", "nisha4"]
// let resultData = arr2.map((item) => {
//     return `${item.length}`
// })
// console.log(resultData);

// ---------------------------------------------------------
// array of object question

// let arr1 = [
//     {
//         name: "nisha",
//         age: 20,
//         status: "Java Dev"
//     },

//     {
//         name: "nisha",
//         age: 20,
//         status: "Java Dev"
//     },
//     {
//         name: "nisha",
//         age: 20,
//         status: "Java Dev"
//     },
//     {
//         name: "nisha",
//         age: 20,
//         status: "Java Dev"
//     }
// ]

// let age = arr1.map((item) => {
//     return item.age

// })

// console.log(age);

// ----------------------------------------------------------

// let arr = [
//     {
//         name: "nisha",
//         age: 20,
//         status: "Java Dev"
//     },

//     {
//         name: "nisha",
//         age: 20,
//         status: "Java Dev"
//     },
//     {
//         name: "nisha",
//         age: 20,
//         status: "Java Dev"
//     },
//     {
//         name: "nisha",
//         age: 20,
//         status: "Java Dev"
//     }
// ]

// let printage5year = arr.map((item) => {
//     item.age = item.age + 5  // 1st
//      ...item , age: item.age + 5  //2nd
//     return item
// })

// console.log(printage5year)

// --------------------------------------------------------------

// let arr2 = ["Nishaturkey", "nisha2", "nisha4"]
// let arr = [...arr2, "Nisha"]

// console.log(arr);

// ------------------------------------------------------------

// filter method