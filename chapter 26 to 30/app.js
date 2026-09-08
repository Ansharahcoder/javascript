
// MATH METHODS (CHAPTER 26-30): Q1 & Q2

// ------------------------------------------
// QUESTION 1: Positive Floating Point Number
// ------------------------------------------
var userInput1 = prompt("Q1: Enter a positive floating point number (e.g., 3.45214):");
var num1 = parseFloat(userInput1);

if (!isNaN(num1) && num1 > 0) {
    document.write("<h3>Question 1:</h3>");
    document.write("number: " + num1 + "<br>");
    document.write("round off value: " + Math.round(num1) + "<br>");
    document.write("floor value: " + Math.floor(num1) + "<br>");
    document.write("ceil value: " + Math.ceil(num1) + "<br><br><hr><br>");
} else {
    document.write("Please enter a valid positive number for Question 1.<br><br><hr><br>");
}


// ------------------------------------------
// QUESTION 2: Negative Floating Point Number
// ------------------------------------------
var userInput2 = prompt("Q2: Enter a negative floating point number (e.g., -2.673):");
var num2 = parseFloat(userInput2);

if (!isNaN(num2) && num2 < 0) {
    document.write("<h3>Question 2:</h3>");
    document.write("number: " + num2 + "<br>");
    document.write("round off value: " + Math.round(num2) + "<br>");
    document.write("floor value: " + Math.floor(num2) + "<br>");
    document.write("ceil value: " + Math.ceil(num2) + "<br>");
} else {
    document.write("Please enter a valid negative number for Question 2.<br>");
}

// QUESTION 3: Absolute Value of a Number
// ------------------------------------------
var userInput3 = prompt("Q3: Enter a number to find its absolute value (e.g., -4):");
var num3 = parseFloat(userInput3);

if (!isNaN(num3)) {
    var absValue = Math.abs(num3);
    document.write("<h3>Question 3:</h3>");
    document.write("The absolute value of " + num3 + " is " + absValue + "<br><br><hr><br>");
} else {
    document.write("Please enter a valid number for Question 3.<br><br><hr><br>");
}


// ------------------------------------------
// QUESTION 4: Dice Simulator using Math.random()
// ------------------------------------------
// Math.random() gives 0 to 0.999..., * 6 gives 0 to 5.999..., Math.floor + 1 gives 1 to 6
var diceValue = Math.floor(Math.random() * 6) + 1;

document.write("<h3>Question 4:</h3>");
document.write("random dice value: " + diceValue + "<br>");


// QUESTION 5: Coin Toss Simulator
// ------------------------------------------
// Math.random() generates 0 or 1, adding 1 gives either 1 or 2
var coinValue = Math.floor(Math.random() * 2) + 1;

document.write("<h3>Question 5:</h3>");
document.write(coinValue + "<br>");

if (coinValue === 2) {
    document.write("random coin value: Heads<br>");
} else {
    document.write("random coin value: Tails<br>");
}

// QUESTION 6: Random Number Between 1 and 100
// ------------------------------------------
var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("<h3>Question 6:</h3>");
document.write("random number between 1 and 100: " + randomNumber + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 7: Parse User Weight
// ------------------------------------------
var weightInput = prompt("Q7: Enter your weight in kilograms:");

if (weightInput) {
    // parseFloat number starting mein detect kar ke extract kar leta hai (e.g. "50kgs" -> 50)
    var weight = parseFloat(weightInput);

    document.write("<h3>Question 7:</h3>");
    if (!isNaN(weight)) {
        document.write("The weight of user is " + weight + " kilograms<br><br><hr><br>");
    } else {
        document.write("Please enter a valid weight.<br><br><hr><br>");
    }
}

// ------------------------------------------
// QUESTION 8: Secret Number Game (1 to 10)
// ------------------------------------------
var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Enter a number between 1 and 10"));

if (userGuess === secretNum) {
    alert("Bingo! Correct answer");
} else {
    alert("Try again!");
}