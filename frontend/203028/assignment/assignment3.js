// // 1. Write a JavaScript program to print numbers from 1 to 10 using a for loop.

// for (let i = i; i < 10; i++) {
//    console.log(i)
    
// }

// // 2. Write a JavaScript program to print all even numbers between 1 and 20 using a for loop.

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

// // 3. Write a JavaScript program to print all odd numbers between 1 and 20 using a for loop.

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// // 4. Write a JavaScript program to calculate the sum of first 10 natural numbers using a for loop.

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }

// console.log("Sum:", sum);

// // 5. Write a JavaScript program to print the multiplication table of 5 using a for loop.

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// // 6. Write a JavaScript program to print numbers from 10 to 1 using a for loop.

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// // 7. Write a JavaScript program to calculate the factorial of a number using a for loop.

// let num = 5;
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
// }

// console.log("Factorial:", factorial);

// // 8. Write a JavaScript program to print squares of numbers from 1 to 5 using a for loop.

// for (let i = 1; i <= 5; i++) {
//     console.log(i * i);
// }

// // 9. Write a JavaScript program to print cubes of numbers from 1 to 5 using a for loop.

// for (let i = 1; i <= 5; i++) {
//     console.log(i * i * i);
// }

// // 10. Write a JavaScript program to print numbers from 1 to 9 using a for loop.

// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// // 11. Write a JavaScript program to print alphabets from A to Z using a for loop.

// for (let i = 65; i <= 90; i++) {
//     console.log(String.fromCharCode(i));
// }

// // 12. Write a JavaScript program to calculate the sum of even numbers from 1 to 20 using a for loop.

// let sum2 = 0;

// for (let i = 2; i <= 20; i += 2) {
//     sum2 = sum2 + i;
// }

// console.log("Sum of even numbers:", sum2);

// // 13. Write a JavaScript program to print a star pattern using a for loop.

// for (let i = 1; i <= 5; i++) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//         pattern += "* ";
//     }

//     console.log(pattern);
// }

// // 14. Write a JavaScript program to print Fibonacci series up to 10 terms using a for loop.

// let a = 0;
// let b = 1;

// for (let i = 1; i <= 10; i++) {
//     console.log(a);

//     let next = a + b;
//     a = b;
//     b = next;
// }

// // 15. Write a JavaScript program to check whether a number is prime or not using a for loop.

// let num22 = 7;
// let isPrime1 = true;

// if (num22 <= 1) {
//     isPrime1 = false;
// } else {
//     for (let i = 2; i < num22; i++) {
//         if (num22 % i === 0) {
//             isPrime1 = false;
//             break;
//         }
//     }
// }

// if (isPrime1) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }


// // While Loop Questions
// // 1. Write a JavaScript program to print numbers from 1 to 10 using a while loop.

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// // 2. Write a JavaScript program to print numbers from 10 to 1 using a while loop.

// let i2 = 10;

// while (i2 >= 1) {
//     console.log(i2);
//     i2--;
// }

// // 3. Write a JavaScript program to print multiplication table of 2 using a while loop.

// let table = 1;

// while (table <= 10) {
//     console.log(`2 x ${table} = ${2 * table}`);
//     table++;
// }

// // 4. Write a JavaScript program to calculate the sum of first 5 natural numbers using a while loop.

// let i21 = 1;
// let sum3 = 0;

// while (i21 <= 5) {
//     sum3 = sum3 + i21;
//     i21++;
// }

// console.log("Sum:", sum);

// // 5. Write a JavaScript program to print odd numbers from 1 to 15 using a while loop.

// let odd = 1;

// while (odd <= 15) {
//     console.log(odd);
//     odd += 2;
// }

// // 6. Write a JavaScript program to print even numbers from 1 to 20 using a while loop.

// let even = 2;

// while (even <= 20) {
//     console.log(even);
//     i += 2;
// }

// // 7. Write a JavaScript program to find factorial of a number using a while loop.

// let num3 = 5;
// let i24 = 1;
// let factorial2 = 1;

// while (i23 <= num) {
//     factorial2 = factorial2 * i23;
//     i23++;
// }

// console.log("Factorial:", factorial);

// // 8. Write a JavaScript program to print Fibonacci series using a while loop.
// let a1 = 0;
// let b1 = 1;
// let i1 = 1;

// while (i1 <= 10) {
//     console.log(a1);

//     let next = a1 + b1;
//     a1 = b1;
//     b1 = next;

//     i1++;
// }

// // 9. Write a JavaScript program to calculate the sum of digits of a number using a while loop.

// let numm = 1234;
// let summ = 0;

// while (numm > 0) {
//     let digit = num % 10;
//     sum = sum + digit;
//     num = Math.floor(num / 10);
// }

// console.log("Sum of digits:", sum);

// // 10. Write a JavaScript program to reverse a number using a while loop.

// let num = 1234;
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log("Reverse:", reverse);

// // 11. Write a JavaScript program to check whether a number is palindrome or not using a while loop.

// let num = 121;
// let original = num;
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }

// if (original === reverse) {
//     console.log("Palindrome Number");
// } else {
//     console.log("Not a Palindrome Number");
// }

// // 12. Write a JavaScript program to count digits in a number using a while loop.

// let num = 12345;
// let count = 0;

// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
// }

// console.log("Total digits:", count);

// // 13. Write a JavaScript program to print alphabets from A to Z using a while loop.

// let i = 65;

// while (i <= 90) {
//     console.log(String.fromCharCode(i));
//     i++;
// }

// // 14. Write a JavaScript program to check whether a number is prime or not using a while loop.

// let num = 7;
// let i = 2;
// let isPrime = true;

// if (num <= 1) {
//     isPrime = false;
// } else {
//     while (i < num) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//         i++;
//     }
// }

// if (isPrime) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }


// // 15. Write a JavaScript program to print a star triangle pattern using a while loop.

// let i = 1;

// while (i <= 5) {
//     let j = 1;
//     let pattern = "";

//     while (j <= i) {
//         pattern += "* ";
//         j++;
//     }

//     console.log(pattern);
//     i++;
// }

// // Do While Loop Questions
// // 1. Write a JavaScript program to print numbers from 1 to 10 using a do...while loop.

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// // 2. Write a JavaScript menu-driven calculator program using a do...while loop.

// let choice;
// let num1 = 20;
// let num2 = 10;

// do {
//     choice = 1; // Select addition

//     switch (choice) {
//         case 1:
//             console.log("Addition:", num1 + num2);
//             break;

//         case 2:
//             console.log("Subtraction:", num1 - num2);
//             break;

//         case 3:
//             console.log("Multiplication:", num1 * num2);
//             break;

//         case 4:
//             console.log("Division:", num1 / num2);
//             break;

//         default:
//             console.log("Invalid Choice");
//     }

// } while (choice !== 0);

// // 3. Write a JavaScript program to print even numbers from 1 to 20 using a do...while loop.

// let i = 2;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 20);

// // 4. Write a JavaScript program to print multiplication table of 3 using a do...while loop.

// let i = 1;

// do {
//     console.log(`3 x ${i} = ${3 * i}`);
//     i++;
// } while (i <= 10);

// // 5. Write a JavaScript program to print numbers from 10 to 1 using a do...while loop.

// let i = 10;

// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// // 6. Write a JavaScript program to calculate sum of first 10 numbers using a do...while loop.

// let i = 1;
// let sum = 0;

// do {
//     sum = sum + i;
//     i++;
// } while (i <= 10);

// console.log("Sum:", sum);

// // 7. Write a JavaScript program to calculate factorial using a do...while loop.

// let num = 5;
// let i = 1;
// let factorial = 1;

// do {
//     factorial = factorial * i;
//     i++;
// } while (i <= num);

// console.log("Factorial:", factorial);

// // 8. Write a JavaScript program to print Fibonacci series using a do...while loop.

// let a = 0;
// let b = 1;
// let i = 1;

// do {
//     console.log(a);

//     let next = a + b;
//     a = b;
//     b = next;

//     i++;
// } while (i <= 10);

// // 9. Write a JavaScript ATM menu-driven program using a do...while loop.

// let balance = 5000;
// let choice;

// do {
//     choice = 1; // Select check balance

//     switch (choice) {
//         case 1:
//             console.log("Your Balance:", balance);
//             break;

//         case 2:
//             let withdraw = 1000;
//             balance = balance - withdraw;
//             console.log("Remaining Balance:", balance);
//             break;

//         case 3:
//             let deposit = 2000;
//             balance = balance + deposit;
//             console.log("Updated Balance:", balance);
//             break;

//         case 4:
//             console.log("Thank you for using ATM");
//             break;

//         default:
//             console.log("Invalid Choice");
//     }

// } while (choice !== 4);

// // 10. Write a JavaScript program to print odd numbers from 1 to 15 using a do...while loop.

// let i = 1;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 15);

// // 11. Write a JavaScript program to reverse a number using a do...while loop.

// let num = 1234;
// let reverse = 0;

// do {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// } while (num > 0);

// console.log("Reverse:", reverse);

// // 12. Write a JavaScript program to count digits in a number using a do...while loop.

// let num = 12345;
// let count = 0;

// do {
//     count++;
//     num = Math.floor(num / 10);
// } while (num > 0);

// console.log("Total Digits:", count);

// // 13. Write a JavaScript program to check palindrome number using a do...while loop.

// let num = 121;
// let original = num;
// let reverse = 0;

// do {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// } while (num > 0);

// if (original === reverse) {
//     console.log("Palindrome Number");
// } else {
//     console.log("Not a Palindrome Number");
// }

// // 14. Write a JavaScript food ordering menu-driven program using a do...while loop.

// let choice;
// let total = 0;

// do {
//     choice = 1; // Select Pizza

//     switch (choice) {
//         case 1:
//             total += 200;
//             console.log("Pizza ordered: Rs. 200");
//             break;

//         case 2:
//             total += 100;
//             console.log("Burger ordered: Rs. 100");
//             break;

//         case 3:
//             total += 50;
//             console.log("Cold Drink ordered: Rs. 50");
//             break;

//         case 4:
//             console.log("Total Bill: Rs.", total);
//             break;

//         default:
//             console.log("Invalid Choice");
//     }

// } while (choice !== 4);

// // 15. Write a JavaScript program to print star pattern using a do...while loop.

// let i = 1;

// do {
//     let j = 1;
//     let pattern = "";

//     do {
//         pattern += "* ";
//         j++;
//     } while (j <= i);

//     console.log(pattern);
//     i++;
// } while (i <= 5);