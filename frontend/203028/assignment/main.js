// 11.	Write a JavaScript program to add two numbers. 

let numA1 = 3
let numA2 = 4
let add = numA1 + numA2
console.log("Add of two numbers is: " + add);

// 12.	Write a JavaScript program to subtract one number from another. 

let numS1 = 20;
let numS2 = 10;
let sub = numS1 - numS2;

console.log("Subtraction of two numbers is: " + sub);

// 13.	Write a JavaScript program to multiply two numbers. 

let numM1 = 20;
let numM2 = 10;
let multi = numM1 * numM2;
console.log("multi of two numbers is: " + multi);

// 14.	Write a JavaScript program to divide two numbers and display the quotient. 


let numD1 = 20;
let numD2 = 5;
let div = numD1 / numD2;
console.log("Quotient is: " + div);


// 15.	Write a JavaScript program to find the remainder using the modulus (%) operator. 

let num1 = 10;
let num2 = 3;
let remainder = num1 % num2;
console.log("Remainder is: " + remainder);

// 16.	Write a JavaScript program to calculate 4 raised to the power of 3 using the exponentiation (**) operator. 

let numBase = 4;
let numExponent = 3;
let result = numBase ** numExponent;
console.log("exponentiation Result is: " + result);

// 17.	Write a JavaScript program to increase the value of a variable by 1 using the increment (++) operator. 

let numIncrement = 5;
numIncrement++;
console.log("Incremented value:", numIncrement);

// 18.	Write a JavaScript program to decrease the value of a variable by 1 using the decrement (--) operator. 
// JavaScript Program to Decrease the Value of a Variable by 1 Using the Decrement (--) Operator

let numDec = 10;
numDec--;
console.log("Decremented value:", numDec);

// 19.	Write a JavaScript program that uses the += assignment operator to add a value to a variable. 
// JavaScript Program to Use the += Assignment Operator

let num = 10;
num += 5;
console.log("Updated value:", num);

// 20.	Write a JavaScript program to check whether two numbers are equal using the == operator. 

// JavaScript Program to Check Whether Two Numbers Are Equal Using the == Operator

let EqualNum1 = 10;
let EqualNum2 = 10;

console.log("Are numbers equal?", EqualNum1 == EqualNum2);


// 21.	Write a JavaScript program to compare two values using the strict equality (===) operator. 

// JavaScript Program to Compare Two Values Using the Strict Equality (===) Operator

let compareNum1 = 10;
let compareNum2 = "10";

console.log("Are values strictly equal?", compareNum1 === compareNum2);

// 22.	Write a JavaScript program to check whether one number is greater than another using the > operator. 

// JavaScript Program to Check Whether One Number Is Greater Than Another Using the > Operator

let greaterNum1 = 20;
let greaterNum2 = 10;

console.log("Is num1 greater than num2?", greaterNum1 > greaterNum2);

// 23.	Write a JavaScript program to check whether one number is less than another using the < operator. 

// JavaScript Program to Check Whether One Number Is Less Than Another Using the < Operator

let lessNum1 = 10;
let lessNum2 = 20;

console.log("Is num1 less than num2?", lessNum1 < lessNum2);

// 24.	Write a JavaScript program to check whether both conditions are true using the logical AND (&&) operator. 

let ANDage = 22;
let ANDhasLicense = true;

console.log("Can drive?", ANDage >= 18 && ANDhasLicense === true);

// 25.	Write a JavaScript program to check whether at least one condition is true using the logical OR (||) operator. 

let ORage = 16;
let ORhasPermission = true;

console.log("Can enter?", ORage >= 18 || ORhasPermission === true);

// 26.	Write a JavaScript program to reverse a Boolean value using the logical NOT (!) operator. 

let isLoggedIn = true;

console.log("After reversing:", !isLoggedIn);


// 27.	Write a JavaScript program that uses the ternary (? :) operator to check whether a person is eligible to vote. 

let age = 20;

let ternaryResult = age >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log(ternaryResult);

// 28.	Write a JavaScript program to join two strings using the + operator. 

let firstName = "Hello";
let lastName = "World";

let nameResult = firstName + " " + lastName;

console.log(nameResult);

// 29. Predict the output of the following JavaScript code using the post-increment (x++) operator. 

 let x = 5;

console.log(x++); 

console.log(x); 

// Ans =  5 6 

// 30. Predict the output of the following JavaScript code that uses both == and === operators.
 
let a = 10; 
let b = "10"; 

console.log(a == b); 

console.log(a === b); 

// Ans = true false 