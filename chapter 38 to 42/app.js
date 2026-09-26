
// FUNCTIONS, SWITCH & LOOPS (CHAPTER 38-42): Q1 TO Q10


// QUESTION 1: Custom Power Function power(a, b)

function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

document.write("<h3>Question 1:</h3>");
document.write("2 raised to power 3 is: " + power(2, 3) + "<br><br><hr><br>");



// QUESTION 2: Check Leap Year

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

var yearInput = parseInt(prompt("Q2: Enter a year to check if it's a leap year:"));
if (!isNaN(yearInput)) {
    document.write("<h3>Question 2:</h3>");
    if (isLeapYear(yearInput)) {
        document.write(yearInput + " is a leap year.<br><br><hr><br>");
    } else {
        document.write(yearInput + " is not a leap year.<br><br><hr><br>");
    }
}



// QUESTION 3: Area of Triangle using 2 Functions

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateTriangleArea(a, b, c) {
    var S = calculateS(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

document.write("<h3>Question 3:</h3>");
document.write("Area of triangle (sides 3, 4, 5): " + calculateTriangleArea(3, 4, 5) + "<br><br><hr><br>");



// QUESTION 4: Main Function for Average and Percentage

function calcAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calcPercentage(m1, m2, m3, totalPerSubject) {
    var totalObtained = m1 + m2 + m3;
    var maxTotal = totalPerSubject * 3;
    return (totalObtained / maxTotal) * 100;
}

function mainFunction() {
    var sub1 = 85;
    var sub2 = 90;
    var sub3 = 78;
    
    var avg = calcAverage(sub1, sub2, sub3);
    var pct = calcPercentage(sub1, sub2, sub3, 100);

    document.write("<h3>Question 4:</h3>");
    document.write("Marks: " + sub1 + ", " + sub2 + ", " + sub3 + "<br>");
    document.write("Average Marks: " + avg.toFixed(2) + "<br>");
    document.write("Percentage: " + pct.toFixed(2) + "%<br><br><hr><br>");
}
mainFunction();


// QUESTION 5: Custom indexOf Function for Single Char

function customIndexOf(str, charToFind) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === charToFind) {
            return i;
        }
    }
    return -1;
}

document.write("<h3>Question 5:</h3>");
document.write("Index of 'o' in 'Hello World': " + customIndexOf("Hello World", "o") + "<br><br><hr><br>");



// QUESTION 6: Delete All Vowels from Sentence

function removeVowels(sentence) {
    var result = "";
    var vowels = "aeiouAEIOU";

    for (var i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i];
        }
    }
    return result;
}

document.write("<h3>Question 6:</h3>");
document.write("Original: 'Hello World'<br>");
document.write("Without Vowels: '" + removeVowels("Hello World") + "'<br><br><hr><br>");


// QUESTION 7: Count Consecutive Vowels using Switch

function countConsecutiveVowels(text) {
    var count = 0;
    text = text.toLowerCase();

    for (var i = 0; i < text.length - 1; i++) {
        var first = text[i];
        var second = text[i + 1];

        // Checking if first character is a vowel using switch
        switch (first) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                // Checking if second character is also a vowel using switch
                switch (second) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++;
                        break;
                }
                break;
        }
    }
    return count;
}

var sampleSentence = "Pleases read this application and give me gratuity";
document.write("<h3>Question 7:</h3>");
document.write("Sentence: '" + sampleSentence + "'<br>");
document.write("Consecutive Vowel Pairs: " + countConsecutiveVowels(sampleSentence) + "<br><br><hr><br>");



// QUESTION 8: Distance Conversion Functions

function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

var distanceKm = parseFloat(prompt("Q8: Enter distance between two cities in kilometers:"));
if (!isNaN(distanceKm)) {
    document.write("<h3>Question 8:</h3>");
    document.write("Distance in Kilometers: " + distanceKm + " km<br>");
    document.write("Distance in Meters: " + convertToMeters(distanceKm) + " m<br>");
    document.write("Distance in Feet: " + convertToFeet(distanceKm).toFixed(2) + " ft<br>");
    document.write("Distance in Inches: " + convertToInches(distanceKm).toFixed(2) + " in<br>");
    document.write("Distance in Centimeters: " + convertToCentimeters(distanceKm) + " cm<br><br><hr><br>");
}



// QUESTION 9: Calculate Overtime Pay

function calculateOvertime(hoursWorked) {
    var overtimeRate = 12.00; // Rs. 12 per hour
    if (hoursWorked > 40) {
        var overtimeHours = hoursWorked - 40;
        return overtimeHours * overtimeRate;
    }
    return 0;
}

document.write("<h3>Question 9:</h3>");
document.write("Overtime pay for 45 hours worked: Rs. " + calculateOvertime(45) + "<br><br><hr><br>");



// QUESTION 10: Cashier Currency Denomination Counter

var withdrawAmount = parseInt(prompt("Q10: Enter amount to withdraw!!"));

if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    var hundredNotes = Math.floor(withdrawAmount / 100);
    var remainingAmount = withdrawAmount % 100;

    var fiftyNotes = Math.floor(remainingAmount / 50);
    remainingAmount = remainingAmount % 50;

    var tenNotes = Math.floor(remainingAmount / 10);

    document.write("<h3>Question 10:</h3>");
    document.write("you will have " + hundredNotes + " hundred notes " + fiftyNotes + " fifty notes " + tenNotes + " ten notes.<br>");
}






