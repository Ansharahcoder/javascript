
// STRING METHODS (CHAPTER 21-25): Q1 TO Q8


// QUESTION 1: Merge Full Name

var firstName = prompt("Q1: Enter your first name:");
var lastName = prompt("Q1: Enter your last name:");
var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "!");


// QUESTION 2: Mobile Model String Length

var favPhone = prompt("Q2: Enter your favorite mobile phone model:");

if (favPhone) {
    document.write("<h3>Question 2:</h3>");
    document.write("My favorite phone is: " + favPhone + "<br>");
    document.write("Length of string: " + favPhone.length + "<br><br><hr>");
}


// QUESTION 3: Index of 'n' in "Pakistani"

var word1 = "Pakistani";
var indexN = word1.indexOf("n");

document.write("<h3>Question 3:</h3>");
document.write("String: " + word1 + "<br>");
document.write("Index of 'n': " + indexN + "<br><br><hr>");


// QUESTION 4: Last Index of 'l' in "Hello World"

var word2 = "Hello World";
var lastIndexL = word2.lastIndexOf("l");

document.write("<h3>Question 4:</h3>");
document.write("String: " + word2 + "<br>");
document.write("Last index of 'l': " + lastIndexL + "<br><br><hr>");


// ------------------------------------------
// QUESTION 5: Character at Index 3 in "Pakistani"
// ------------------------------------------
var word3 = "Pakistani";
var charAtIndex3 = word3.charAt(3);

document.write("<h3>Question 5:</h3>");
document.write("String: " + word3 + "<br>");
document.write("Character at index 3: " + charAtIndex3 + "<br><br><hr>");


// ------------------------------------------
// QUESTION 6: Q1 using concat() method
// ------------------------------------------
var firstNameConcat = prompt("Q6: Enter your first name:");
var lastNameConcat = prompt("Q6: Enter your last name:");
var fullNameConcat = firstNameConcat.concat(" ", lastNameConcat);

alert("Hello (via concat), " + fullNameConcat + "!");


// ------------------------------------------
// QUESTION 7: Replace "Hyder" with "Islam"
// ------------------------------------------
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("<h3>Question 7:</h3>");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br><br><hr>");


// ------------------------------------------
// QUESTION 8: Replace all "and" with "&"
// ------------------------------------------
var message = "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.replace(/and/g, "&");

document.write("<h3>Question 8:</h3>");
document.write("<b>Original Message:</b> " + message + "<br><br>");
document.write("<b>After Replacement:</b> " + updatedMessage + "<br>");



// QUESTION 9: Convert String to Number

var str = "472";
var num = Number(str); // Ya parseInt(str) bhi istemal kar sakte hain

document.write("<h3>Question 9:</h3>");
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof(str) + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof(num) + "<br>");




// QUESTION 10: Convert input to Capital Letters (Upper Case)

var userInput10 = prompt("Q10: Enter any word (e.g., peanuts):");

if (userInput10) {
    var upperCaseInput = userInput10.toUpperCase();
    
    document.write("<h3>Question 10:</h3>");
    document.write("User input: " + userInput10 + "<br>");
    document.write("Upper case: " + upperCaseInput + "<br><br><hr><br>");
}



// QUESTION 11: Convert input to Title Case

var userInput11 = prompt("Q11: Enter any word (e.g., javascript):");

if (userInput11) {
    // Pehla character uppercase aur baaqi characters lowercase
    var titleCaseInput = userInput11.charAt(0).toUpperCase() + userInput11.slice(1).toLowerCase();
    
    document.write("<h3>Question 11:</h3>");
    document.write("User input: " + userInput11 + "<br>");
    document.write("Title case: " + titleCaseInput + "<br>");
}





// QUESTION 12: Convert Number to String & Remove Dot

var num = 35.36;
var strNum = num.toString().replace(".", "");

document.write("<h3>Question 12:</h3>");
document.write("Number: " + num + "<br>");
document.write("Result: " + strNum + "<br><br><hr>");



// QUESTION 13: Validate Username (No Special Characters)

var username = prompt("Q13: Enter your username:");
var isValid = true;

if (username) {
    for (var i = 0; i < username.length; i++) {
        var charCode = username.charCodeAt(i);
        // Checking for !, ,, ., @
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        alert("Please enter a valid username");
    } else {
        alert("Username accepted: " + username);
    }
}



// QUESTION 14: Search Item in Array (Case Insensitive)

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Q14: Welcome to ABC Bakery. What do you want to order sir/ma'am?");

if (userSearch) {
    var searchLower = userSearch.toLowerCase();
    var foundIndex = -1;

    for (var j = 0; j < A.length; j++) {
        if (A[j].toLowerCase() === searchLower) {
            foundIndex = j;
            break;
        }
    }

    document.write("<h3>Question 14:</h3>");
    if (foundIndex !== -1) {
        document.write(userSearch + " is <b>available</b> at index " + foundIndex + " in our bakery<br><br><hr>");
    } else {
        document.write("We are sorry. " + userSearch + " is <b>not available</b> in our bakery<br><br><hr>");
    }
}


// QUESTION 15: Password Validation

var password = prompt("Q15: Enter password:");

if (password) {
    document.write("<h3>Question 15:</h3>");
    document.write("Entered password: " + password + "<br>");

    var hasAlphabet = false;
    var hasNumber = false;
    var startsWithNumber = false;
    var isLongEnough = password.length >= 6;

    // Check if starts with a number (ASCII 48 to 57)
    var firstCharCode = password.charCodeAt(0);
    if (firstCharCode >= 48 && firstCharCode <= 57) {
        startsWithNumber = true;
    }

    // Check for alphabets and numbers
    for (var k = 0; k < password.length; k++) {
        var code = password.charCodeAt(k);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            hasAlphabet = true;
        } else if (code >= 48 && code <= 57) {
            hasNumber = true;
        }
    }

    if (!isLongEnough) {
        document.write("Password must be at least 6 characters long.<br>");
        document.write("Please enter a valid password<br><br><hr>");
    } else if (startsWithNumber) {
        document.write("Password can not begin with a number.<br>");
        document.write("Please enter a valid password<br><br><hr>");
    } else if (!hasAlphabet || !hasNumber) {
        document.write("Password must contain both alphabets and numbers.<br>");
        document.write("Please enter a valid password<br><br><hr>");
    } else {
        document.write("Password is valid!<br><br><hr>");
    }
}



// QUESTION 16: Convert String to Array (Split)

var university = "University of Karachi";
var uniArray = university.split("");

document.write("<h3>Question 16:</h3>");
for (var m = 0; m < uniArray.length; m++) {
    document.write(uniArray[m] + "<br>");
}
document.write("<br><hr>");



// QUESTION 17: Display Last Character of User Input

var userInput17 = prompt("Q17: Enter any string (e.g., Pakistan):");

if (userInput17) {
    var lastChar = userInput17.charAt(userInput17.length - 1);

    document.write("<h3>Question 17:</h3>");
    document.write("User input: " + userInput17 + "<br>");
    document.write("Last character of input: " + lastChar + "<br><br><hr>");
}


// QUESTION 18: Count Occurrences of "the"

var text = "The quick brown fox jumps over the lazy dog";
var lowerText = text.toLowerCase();
var words = lowerText.split(" ");
var count = 0;

for (var n = 0; n < words.length; n++) {
    if (words[n] === "the") {
        count++;
    }
}

document.write("<h3>Question 18:</h3>");
document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'<br>");
