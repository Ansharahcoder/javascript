// ==========================================
// FUNCTIONS (CHAPTER 35-38): Q1 TO Q14
// ==========================================

// ------------------------------------------
// QUESTION 1: Display Current Date & Time
// ------------------------------------------
function displayDateTime() {
    var now = new Date();
    document.write("<h3>Question 1:</h3>");
    document.write(now + "<br><br><hr><br>");
}
displayDateTime();


// ------------------------------------------
// QUESTION 2: Greet User with Full Name
// ------------------------------------------
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello " + fullName + "! Welcome.");
}
greetUser("John", "Doe");


// ------------------------------------------
// QUESTION 3: Add Two Numbers and Return Sum
// ------------------------------------------
function addTwoNumbers() {
    var num1 = parseFloat(prompt("Q3: Enter first number:"));
    var num2 = parseFloat(prompt("Q3: Enter second number:"));
    return num1 + num2;
}
var sumResult = addTwoNumbers();
document.write("<h3>Question 3:</h3>");
document.write("Sum of two numbers: " + sumResult + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 4: Calculator
// ------------------------------------------
function calculator(num1, num2, operator) {
    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    } else if (operator === "%") {
        result = num1 % num2;
    } else {
        result = "Invalid operator";
    }
    return result;
}
var calcResult = calculator(10, 5, "*");
document.write("<h3>Question 4:</h3>");
document.write("Result: " + calcResult + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 5: Square of Argument
// ------------------------------------------
function square(num) {
    return num * num;
}
document.write("<h3>Question 5:</h3>");
document.write("Square of 5: " + square(5) + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 6: Factorial of a Number
// ------------------------------------------
function factorial(n) {
    if (n < 0) return "Not defined for negative numbers";
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
document.write("<h3>Question 6:</h3>");
document.write("Factorial of 5: " + factorial(5) + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 7: Counting Between Start and End
// ------------------------------------------
function displayCounting(start, end) {
    document.write("<h3>Question 7:</h3>");
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
    document.write("<br><br><hr><br>");
}
displayCounting(1, 10);


// ------------------------------------------
// QUESTION 8: Nested Function - Hypotenuse
// ------------------------------------------
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    
    var hypSquare = calculateSquare(base) + calculateSquare(perpendicular);
    return Math.sqrt(hypSquare);
}
document.write("<h3>Question 8:</h3>");
document.write("Hypotenuse of base 3 & perpendicular 4: " + calculateHypotenuse(3, 4) + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 9: Area of a Rectangle
// ------------------------------------------
function calculateRectangleArea(width, height) {
    return width * height;
}

// i. Arguments as value
var areaByValue = calculateRectangleArea(10, 5);

// ii. Arguments as variables
var w = 8;
var h = 4;
var areaByVariable = calculateRectangleArea(w, h);

document.write("<h3>Question 9:</h3>");
document.write("Area (Arguments as values): " + areaByValue + "<br>");
document.write("Area (Arguments as variables): " + areaByVariable + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 10: Check Palindrome String
// ------------------------------------------
function isPalindrome(str) {
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    var reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
document.write("<h3>Question 10:</h3>");
document.write("'madam' is palindrome? " + isPalindrome("madam") + "<br>");
document.write("'hello' is palindrome? " + isPalindrome("hello") + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 11: Capitalize First Letter of Each Word
// ------------------------------------------
function titleCase(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
}
document.write("<h3>Question 11:</h3>");
document.write("Original: 'the quick brown fox'<br>");
document.write("Formatted: '" + titleCase("the quick brown fox") + "'<br><br><hr><br>");


// ------------------------------------------
// QUESTION 12: Find the Longest Word
// ------------------------------------------
function findLongestWord(str) {
    var words = str.split(" ");
    var longest = words[0];

    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
document.write("<h3>Question 12:</h3>");
document.write("Original: 'Web Development Tutorial'<br>");
document.write("Longest word: '" + findLongestWord("Web Development Tutorial") + "'<br><br><hr><br>");


// ------------------------------------------
// QUESTION 13: Count Occurrences of a Letter
// ------------------------------------------
function countLetterOccurrences(str, letter) {
    var count = 0;
    var target = letter.toLowerCase();
    
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === target) {
            count++;
        }
    }
    return count;
}
document.write("<h3>Question 13:</h3>");
document.write("Occurrences of 'o' in 'JSResourceS.com': " + countLetterOccurrences("JSResourceS.com", "o") + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 14: The Geometrizer
// ------------------------------------------
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2) + "<br>");
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("The area is " + area.toFixed(2) + "<br>");
}

document.write("<h3>Question 14:</h3>");
calcCircumference(5);
calcArea(5);