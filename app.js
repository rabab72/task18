var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

var favoritePhoneModel = prompt("Enter your favorite phone model:");
var lengthOfString = favoritePhoneModel.length;
document.write("My favorite phone is: " + favoritePhoneModel + "<br>");
document.write("Length of string: " + lengthOfString);

var word = "Pakistani";
var index = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);

var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("String: " + word + "<br>");
document.write("Last index of 'l': " + lastIndex);

var word = "Pakistani";
var character = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at 3rd index: " + character);

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "!");

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + newCity);

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Original Message: " + message + "<br>");
document.write("Modified Message: " + newMessage);

var str = "472";
var num = parseInt(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof(num));

var userInput = prompt("Enter a string:");
var upperCase = userInput.toUpperCase();
document.write("User Input: " + userInput + "<br>");
document.write("Upper Case: " + upperCase);

var num = 35.36;
var str = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + str);

var username = prompt("Enter your username:");
var isValid = /^[a-zA-Z0-9]+$/.test(username);
if (!isValid) {
    alert("Please enter a valid username without special symbols.");
}

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter an item to search:");
var found = A.indexOf(searchItem.toLowerCase()) !== -1;
if (found) {
    alert(searchItem + " is available at index " + A.indexOf(searchItem.toLowerCase()) + " in our bakery.");
} else {
    alert(searchItem + " is not available in our bakery.");
}

var password = prompt("Enter your password:");
var hasAlphabetsAndNumbers = /[a-zA-Z]+/.test(password) && /[0-9]+/.test(password);
var doesNotStartWithNumber = isNaN(password.charAt(0));
var isAtLeastSixCharactersLong = password.length >= 6;
if (!hasAlphabetsAndNumbers || !doesNotStartWithNumber || !isAtLeastSixCharactersLong) {
    alert("Please enter a valid password.");
}

var userInput = prompt("Enter a string:");
var lastCharacter = userInput.charAt(userInput.length - 1);
alert("Last character of input: " + lastCharacter);

var text = "The quick brown fox jumps over the lazy dog";
var word = "the";
var count = text.toLowerCase().split(word).length - 1;
document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word '" + word + "'");

// 1. Slice "ap" out of the string "captain"
var sameWords = "captain";
var sliced = sameWords.slice(1, 3);

// 2. Find the number of characters in a string
var strLength = sameWords.length;

// 3. Slice four middle characters out of the string "elephant"
var animal = "elephant";
var seg = animal.slice(1, 5);

// 4. Find the number of characters in a string represented by a variable
var variable = "exampleString";
var lengthOfVariable = variable.length;

// 5. Measure the number of characters and slice all but the first and last 3 characters of a string
var str = "exampleString";
var charactersCount = str.length;
var slicedString = str.slice(1, -3);

// 6. Find the index of "be" in the string "To be or not to be."
var text = "To be or not to be.";
var indx = text.indexOf("be"); // Value of indx is 3

// 7. Find the last index of "be" in the string "To be or not to be."
var indx = text.lastIndexOf("be"); // Value of indx is 15

// 8. Find the index of the first character of the last instance of "go" in the string
var indx = text.lastIndexOf("go");

// 9. If statement to check if a segment exists in a string
if (str.includes(segment)) {
    // Code block if segment exists
}

// 10. Find the character at index 2 in the string "abcde"
var str = "abcde";
var characterAtIndex2 = str.charAt(2); // Character is "c"

// 11. Find the 10th character in the string represented by text
var text = "exampleText";
var cha = text.charAt(9); // Assigns the 10th character to variable cha

// 12. Find the last character in the string represented by str
var str = "exampleString";
var x = str.charAt(str.length - 1); // Assigns the last character to variable x

// 13. Find the 5th character in a string represented by input
var input = "exampleInput";
var cha = input.charAt(4); // Assigns the 5th character to variable cha