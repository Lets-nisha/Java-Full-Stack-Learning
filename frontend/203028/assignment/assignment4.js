// JavaScript Switch Statement - 40 Questions


// 1. Write a JavaScript program to print the day name according to the given day number using a switch statement.

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day number");
}


// 2. Write a JavaScript program to print the month name according to the month number using a switch statement.

let month = 5;

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid month number");
}


// 3. Write a JavaScript program to perform addition, subtraction, multiplication, and division using a switch statement.

let a = 20;
let b = 10;
let operator = "+";

switch (operator) {
    case "+":
        console.log("Addition:", a + b);
        break;

    case "-":
        console.log("Subtraction:", a - b);
        break;

    case "*":
        console.log("Multiplication:", a * b);
        break;

    case "/":
        console.log("Division:", a / b);
        break;

    default:
        console.log("Invalid operator");
}


// 4. Write a JavaScript program to display traffic signal instructions using a switch statement.

let signal = "red";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic signal");
}


// 5. Write a JavaScript program to print grade remarks using a switch statement.
// 
let grade = "A";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Very Good");
        break;

    case "C":
        console.log("Good");
        break;

    case "D":
        console.log("Needs Improvement");
        break;

    case "F":
        console.log("Fail");
        break;

    default:
        console.log("Invalid grade");
}


// 6. Write a JavaScript program to display food items according to menu choice using a switch statement.

let choice1 = 2;

switch (choice1) {
    case 1:
        console.log("Pizza");
        break;

    case 2:
        console.log("Burger");
        break;

    case 3:
        console.log("Sandwich");
        break;

    case 4:
        console.log("Pasta");
        break;

    case 5:
        console.log("Biryani");
        break;

    default:
        console.log("Invalid menu choice");
}


// 7. Write a JavaScript program to print browser information using a switch statement.

let browser = "Chrome";

switch (browser) {
    case "Chrome":
        console.log("Google Chrome");
        break;

    case "Firefox":
        console.log("Mozilla Firefox");
        break;

    case "Safari":
        console.log("Apple Safari");
        break;

    case "Edge":
        console.log("Microsoft Edge");
        break;

    case "Opera":
        console.log("Opera Browser");
        break;

    default:
        console.log("Unknown Browser");
}


// 8. Write a JavaScript program to print greetings according to language using a switch statement.

let language = "Hindi";

switch (language) {
    case "English":
        console.log("Hello!");
        break;

    case "Hindi":
        console.log("Namaste!");
        break;

    case "French":
        console.log("Bonjour!");
        break;

    case "Spanish":
        console.log("Hola!");
        break;

    case "German":
        console.log("Hallo!");
        break;

    default:
        console.log("Language not supported");
}


// 9. Write a JavaScript program to print fruit colors using a switch statement.

let fruit = "Apple";

switch (fruit) {
    case "Apple":
        console.log("Red");
        break;

    case "Banana":
        console.log("Yellow");
        break;

    case "Orange":
        console.log("Orange");
        break;

    case "Grapes":
        console.log("Green or Purple");
        break;

    case "Watermelon":
        console.log("Green outside and Red inside");
        break;

    default:
        console.log("Fruit not found");
}

// 10. Write a JavaScript program to check whether a day is a weekday or weekend using a switch statement.

let days = "Sunday";

switch (days) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;

    default:
        console.log("Invalid day");
}


// 11. Write a JavaScript program to display ATM operations using a switch statement.

let choices = 2;

switch (choices) {
    case 1:
        console.log("Check Balance");
        break;

    case 2:
        console.log("Withdraw Money");
        break;

    case 3:
        console.log("Deposit Money");
        break;

    case 4:
        console.log("Change PIN");
        break;

    case 5:
        console.log("Mini Statement");
        break;

    default:
        console.log("Invalid ATM operation");
}

// 12. Write a JavaScript program to print the season name according to month number using a switch statement.

let months = 4;

switch (months) {
    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;

    case 6:
    case 7:
    case 8:
    case 9:
        console.log("Rainy Season");
        break;

    case 10:
    case 11:
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    default:
        console.log("Invalid month number");
}

// 13. Write a JavaScript program to check whether a character is a vowel using a switch statement.

let character = "e";

switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Not a vowel");
}

// 14. Write a JavaScript program to print mobile company names using a switch statement.

let choices1 = 3;

switch (choices1) {
    case 1:
        console.log("Samsung");
        break;

    case 2:
        console.log("Apple");
        break;

    case 3:
        console.log("OnePlus");
        break;

    case 4:
        console.log("Xiaomi");
        break;

    case 5:
        console.log("Vivo");
        break;

    default:
        console.log("Company not found");
}


// 15. Write a JavaScript program to display subscription features according to plan type using a switch statement.

let plan = "Premium";

switch (plan) {
    case "Basic":
        console.log("Basic access with limited features");
        break;

    case "Standard":
        console.log("HD streaming on two devices");
        break;

    case "Premium":
        console.log("4K streaming on multiple devices");
        break;

    default:
        console.log("Invalid subscription plan");
}


// 16. Write a JavaScript program to print direction information using a switch statement.

let direction = "North";

switch (direction) {
    case "North":
        console.log("Direction: North");
        break;

    case "South":
        console.log("Direction: South");
        break;

    case "East":
        console.log("Direction: East");
        break;

    case "West":
        console.log("Direction: West");
        break;

    default:
        console.log("Invalid direction");
}

// 17. Write a JavaScript program to print result remarks using a switch statement.

let result = "Pass";

switch (result) {
    case "Pass":
        console.log("Congratulations! You passed.");
        break;

    case "Fail":
        console.log("Better luck next time.");
        break;

    case "Absent":
        console.log("You were absent.");
        break;

    default:
        console.log("Invalid result");
}

// 18. Write a JavaScript program to display clothing sizes using a switch statement.

let size = "M";

switch (size) {
    case "S":
        console.log("Small");
        break;

    case "M":
        console.log("Medium");
        break;

    case "L":
        console.log("Large");
        break;

    case "XL":
        console.log("Extra Large");
        break;

    case "XXL":
        console.log("Double Extra Large");
        break;

    default:
        console.log("Invalid size");
}

// 19. Write a JavaScript program to print car company details using a switch statement.

let company = "Toyota";

switch (company) {
    case "Toyota":
        console.log("Toyota - Japan");
        break;

    case "BMW":
        console.log("BMW - Germany");
        break;

    case "Ford":
        console.log("Ford - USA");
        break;

    case "Tata":
        console.log("Tata Motors - India");
        break;

    case "Hyundai":
        console.log("Hyundai - South Korea");
        break;

    default:
        console.log("Company not found");
}

// 20. Write a JavaScript program to print country currency using a switch statement.

let country = "India";

switch (country) {
    case "India":
        console.log("Indian Rupee - INR");
        break;

    case "USA":
        console.log("US Dollar - USD");
        break;

    case "UK":
        console.log("Pound Sterling - GBP");
        break;

    case "Japan":
        console.log("Japanese Yen - JPY");
        break;

    case "Europe":
        console.log("Euro - EUR");
        break;

    default:
        console.log("Currency information not found");
}

// 21. Write a JavaScript program to print shape details using a switch statement.

let shape = "Circle";

switch (shape) {
    case "Circle":
        console.log("A circle has no sides and no vertices.");
        break;

    case "Square":
        console.log("A square has 4 equal sides.");
        break;

    case "Rectangle":
        console.log("A rectangle has 4 sides.");
        break;

    case "Triangle":
        console.log("A triangle has 3 sides.");
        break;

    case "Pentagon":
        console.log("A pentagon has 5 sides.");
        break;

    default:
        console.log("Shape not found");
}

// 22. Write a JavaScript program to print sports information using a switch statement.

let sport = "Cricket";

switch (sport) {
    case "Cricket":
        console.log("Cricket is played with a bat and ball.");
        break;

    case "Football":
        console.log("Football is played by two teams.");
        break;

    case "Tennis":
        console.log("Tennis is played with a racket and ball.");
        break;

    case "Basketball":
        console.log("Basketball is played with a ball and hoop.");
        break;

    case "Hockey":
        console.log("Hockey is played with a stick and ball.");
        break;

    default:
        console.log("Sport not found");
}


// 23. Write a JavaScript program to display employee department information using a switch statement.

let department = "IT";

switch (department) {
    case "HR":
        console.log("Human Resources Department");
        break;

    case "IT":
        console.log("Information Technology Department");
        break;

    case "Sales":
        console.log("Sales Department");
        break;

    case "Finance":
        console.log("Finance Department");
        break;

    case "Marketing":
        console.log("Marketing Department");
        break;

    default:
        console.log("Department not found");
}

// 24. Write a JavaScript program to convert a number into words using a switch statement.

let number = 4;

switch (number) {
    case 0:
        console.log("Zero");
        break;

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;

    case 4:
        console.log("Four");
        break;

    case 5:
        console.log("Five");
        break;

    case 6:
        console.log("Six");
        break;

    case 7:
        console.log("Seven");
        break;

    case 8:
        console.log("Eight");
        break;

    case 9:
        console.log("Nine");
        break;

    default:
        console.log("Enter a number between 0 and 9");
}


// 25. Write a JavaScript program to print subject teacher names using a switch statement.

let subject = "Math";

switch (subject) {
    case "Math":
        console.log("Mathematics Teacher: Mr. Sharma");
        break;

    case "English":
        console.log("English Teacher: Ms. Verma");
        break;

    case "Science":
        console.log("Science Teacher: Mr. Khan");
        break;

    case "Computer":
        console.log("Computer Teacher: Ms. Gupta");
        break;

    case "History":
        console.log("History Teacher: Mr. Singh");
        break;

    default:
        console.log("Subject not found");
}

// 26. Write a JavaScript program to display payment method information using a switch statement.

let payment = "UPI";

switch (payment) {
    case "Cash":
        console.log("Pay using cash.");
        break;

    case "Card":
        console.log("Pay using debit or credit card.");
        break;

    case "UPI":
        console.log("Pay using UPI.");
        break;

    case "Net Banking":
        console.log("Pay using internet banking.");
        break;

    case "Wallet":
        console.log("Pay using a digital wallet.");
        break;

    default:
        console.log("Invalid payment method");
}


// 27. Write a JavaScript program to display movie genre details using a switch statement.

let genre = "Comedy";

switch (genre) {
    case "Action":
        console.log("Action movies include exciting stunts and fights.");
        break;

    case "Comedy":
        console.log("Comedy movies make people laugh.");
        break;

    case "Horror":
        console.log("Horror movies create fear and suspense.");
        break;

    case "Romance":
        console.log("Romance movies focus on love stories.");
        break;

    case "Drama":
        console.log("Drama movies focus on emotional stories.");
        break;

    default:
        console.log("Genre not found");
}


// 28. Write a JavaScript program to print temperature unit details using a switch statement.

let unit = "C";

switch (unit) {
    case "C":
        console.log("Celsius (°C)");
        break;

    case "F":
        console.log("Fahrenheit (°F)");
        break;

    case "K":
        console.log("Kelvin (K)");
        break;

    default:
        console.log("Invalid temperature unit");
}

// 29. Write a JavaScript program to print operating system names using a switch statement.

let os = "Windows";

switch (os) {
    case "Windows":
        console.log("Microsoft Windows");
        break;

    case "macOS":
        console.log("Apple macOS");
        break;

    case "Linux":
        console.log("Linux Operating System");
        break;

    case "Android":
        console.log("Google Android");
        break;

    case "iOS":
        console.log("Apple iOS");
        break;

    default:
        console.log("Operating system not found");
}


// 30. Write a JavaScript program to display drink names according to menu choice using a switch statement.

let choice = 3;

switch (choice) {
    case 1:
        console.log("Tea");
        break;

    case 2:
        console.log("Coffee");
        break;

    case 3:
        console.log("Cold Drink");
        break;

    case 4:
        console.log("Juice");
        break;

    case 5:
        console.log("Milkshake");
        break;

    default:
        console.log("Invalid drink choice");
}

// 31. Write a JavaScript program to print school house names using a switch statement.

let house = 2;

switch (house) {
    case 1:
        console.log("Red House");
        break;

    case 2:
        console.log("Blue House");
        break;

    case 3:
        console.log("Green House");
        break;

    case 4:
        console.log("Yellow House");
        break;

    default:
        console.log("Invalid house code");
}

// 32. Write a JavaScript program to display cab type information using a switch statement.

let cabType = "Sedan";

switch (cabType) {
    case "Mini":
        console.log("Mini - Small and economical cab");
        break;

    case "Sedan":
        console.log("Sedan - Comfortable standard cab");
        break;

    case "SUV":
        console.log("SUV - Spacious cab for more passengers");
        break;

    case "Auto":
        console.log("Auto - Three-wheeler ride");
        break;

    case "Bike":
        console.log("Bike - Two-wheeler ride");
        break;

    default:
        console.log("Invalid cab type");
}

// 33. Write a JavaScript program to display internet speed category using a switch statement.

let speed = "High";

switch (speed) {
    case "Low":
        console.log("Low speed - Basic browsing");
        break;

    case "Medium":
        console.log("Medium speed - Browsing and video calls");
        break;

    case "High":
        console.log("High speed - HD streaming and downloads");
        break;

    case "Very High":
        console.log("Very high speed - 4K streaming and heavy downloads");
        break;

    default:
        console.log("Invalid speed category");
}

// 34. Write a JavaScript program to display user permissions using a switch statement.

let role = "Admin";

switch (role) {
    case "Admin":
        console.log("Can view, add, edit, and delete records.");
        break;

    case "Editor":
        console.log("Can view and edit records.");
        break;

    case "Viewer":
        console.log("Can only view records.");
        break;

    case "Guest":
        console.log("Limited guest access.");
        break;

    default:
        console.log("Invalid user role");
}

// 35. Write a JavaScript program to print festival greetings using a switch statement.

let festival = "Diwali";

switch (festival) {
    case "Diwali":
        console.log("Happy Diwali!");
        break;

    case "Holi":
        console.log("Happy Holi!");
        break;

    case "Eid":
        console.log("Eid Mubarak!");
        break;

    case "Christmas":
        console.log("Merry Christmas!");
        break;

    case "New Year":
        console.log("Happy New Year!");
        break;

    default:
        console.log("Festival greeting not found");
}


// 36. Write a JavaScript program to display laptop brand information using a switch statement.

let brand = "Dell";

switch (brand) {
    case "Dell":
        console.log("Dell - Laptop and computer brand");
        break;

    case "HP":
        console.log("HP - Laptop and computer brand");
        break;

    case "Lenovo":
        console.log("Lenovo - Laptop and computer brand");
        break;

    case "Apple":
        console.log("Apple - MacBook laptops");
        break;

    case "ASUS":
        console.log("ASUS - Laptop and computer brand");
        break;

    default:
        console.log("Laptop brand not found");
}


// 37. Write a JavaScript program to print animal sounds using a switch statement.

let animal = "Dog";

switch (animal) {
    case "Dog":
        console.log("Dog says: Woof");
        break;

    case "Cat":
        console.log("Cat says: Meow");
        break;

    case "Cow":
        console.log("Cow says: Moo");
        break;

    case "Lion":
        console.log("Lion says: Roar");
        break;

    case "Duck":
        console.log("Duck says: Quack");
        break;

    default:
        console.log("Animal not found");
}


// 38. Write a JavaScript program to display course details using a switch statement.

let course = "JavaScript";

switch (course) {
    case "JavaScript":
        console.log("JavaScript - Programming language for web development");
        break;

    case "Python":
        console.log("Python - General-purpose programming language");
        break;

    case "Java":
        console.log("Java - Object-oriented programming language");
        break;

    case "React":
        console.log("React - JavaScript library for user interfaces");
        break;

    case "HTML":
        console.log("HTML - Markup language for web pages");
        break;

    default:
        console.log("Course not found");
}


// 39. Write a JavaScript program to print social media platform details using a switch statement.

let platform = "Instagram";

switch (platform) {
    case "Instagram":
        console.log("Instagram - Photo and video sharing platform");
        break;

    case "Facebook":
        console.log("Facebook - Social networking platform");
        break;

    case "YouTube":
        console.log("YouTube - Video sharing platform");
        break;

    case "LinkedIn":
        console.log("LinkedIn - Professional networking platform");
        break;

    case "X":
        console.log("X - Social media and microblogging platform");
        break;

    default:
        console.log("Platform not found");
}

// 40. Write a JavaScript program to display weather season information using a switch statement.

let weather = "Rainy";

switch (weather) {
    case "Summer":
        console.log("Hot and sunny weather");
        break;

    case "Winter":
        console.log("Cold weather");
        break;

    case "Rainy":
        console.log("Rainy and cloudy weather");
        break;

    case "Spring":
        console.log("Mild weather with flowers blooming");
        break;

    case "Autumn":
        console.log("Cool weather with falling leaves");
        break;

    default:
        console.log("Weather season not found");
}






















