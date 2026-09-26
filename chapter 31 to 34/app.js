
// DATE METHODS (CHAPTER 31-34): Q1 TO Q14

// QUESTION 1: Current Date and Time

var currentDate = new Date();

document.write("<h3>Question 1:</h3>");
document.write(currentDate + "<br><br><hr><br>");


// QUESTION 2: Alert Current Month in Words

var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var currentMonth = monthNames[currentDate.getMonth()];

alert("Current month: " + currentMonth);


// QUESTION 3: Alert First 3 Letters of Current Day

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = dayNames[currentDate.getDay()];

alert("Today is " + currentDay);


// QUESTION 4: Check for Weekend ("It's Fun day")

var dayIndex = currentDate.getDay();

document.write("<h3>Question 4:</h3>");
if (dayIndex === 0 || dayIndex === 6) { // 0 = Sunday, 6 = Saturday
    document.write("It's Fun day<br><br><hr><br>");
} else {
    document.write("It's a regular workday<br><br><hr><br>");
}


// QUESTION 5: First 15 Days or Last Days of Month

var dateOfMonth = currentDate.getDate();

document.write("<h3>Question 5:</h3>");
if (dateOfMonth < 16) {
    document.write("First fifteen days of the month<br><br><hr><br>");
} else {
    document.write("Last days of the month<br><br><hr><br>");
}



// QUESTION 6: Minutes/Milliseconds Since Jan 1, 1970

var now = new Date();
var millisecsSince1970 = now.getTime();
var minutesSince1970 = millisecsSince1970 / (1000 * 60);

document.write("<h3>Question 6:</h3>");
document.write("Current Date: " + now + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + millisecsSince1970 + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutesSince1970 + "<br><br><hr><br>");

// QUESTION 7: Test AM or PM

var currentHours = currentDate.getHours();

if (currentHours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}



// QUESTION 8: Date Object for Last Day of Last Month of 2020

var laterDate = new Date(2020, 11, 31); // 11 represents December

document.write("<h3>Question 8:</h3>");
document.write("Later date: " + laterDate + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 9: Days Passed Since 1st Ramadan (June 18, 2015)
// ------------------------------------------
var ramadanStart = new Date("June 18, 2015");
var diffTime = currentDate.getTime() - ramadanStart.getTime();
var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

alert(diffDays + " days have passed since 1st Ramadan, 2015");


// ------------------------------------------
// QUESTION 10: Seconds Elapsed Between Reference Date and Beginning of 2015
// ------------------------------------------
var referenceDate = new Date("Sat Dec 05 2015 22:50:16");
var beginning2015 = new Date("Jan 01 2015 00:00:00");

var elapsedSecs = (referenceDate.getTime() - beginning2015.getTime()) / 1000;

document.write("<h3>Question 10:</h3>");
document.write("On reference date " + referenceDate + ",<br>");
document.write(elapsedSecs + " seconds had passed since beginning of 2015<br><br><hr><br>");


// ------------------------------------------
// QUESTION 11: Reset Date Object 1 Hour Ahead / Back
// ------------------------------------------
var date11 = new Date();
document.write("<h3>Question 11:</h3>");
document.write("current date: " + date11 + "<br>");

date11.setHours(date11.getHours() - 1);
document.write("1 hour ago, it was " + date11 + "<br><br><hr><br>");


// ------------------------------------------
// QUESTION 12: Reset Date 100 Years Back
// ------------------------------------------
var date12 = new Date();
var pastDate = new Date();
pastDate.setFullYear(date12.getFullYear() - 100);

alert("current date: " + date12 + "\n100 years back, it was " + pastDate);


// ------------------------------------------
// QUESTION 13: Calculate Birth Year from Age
// ------------------------------------------
var userAge = prompt("Q13: Enter your age:");

if (userAge) {
    var age = parseInt(userAge);
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - age;

    document.write("<h3>Question 13:</h3>");
    document.write("Your age is " + age + "<br>");
    document.write("Your birth year is " + birthYear + "<br><br><hr><br>");
}


// ------------------------------------------
// QUESTION 14: K-Electric Bill Generator
// ------------------------------------------
var customerName = "ABC Customer";
var month = monthNames[currentDate.getMonth()];
var numberOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

var netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

document.write("<h3>Question 14:</h3>");
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + month + "</b><br>");
document.write("Number of units: <b>" + numberOfUnits + "</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");
document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
document.write("Late payment surcharge: <b>" + latePaymentSurcharge + "</b><br>");
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b><br>");