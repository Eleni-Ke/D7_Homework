// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true;
let gender;

isMale ? (gender = "male") : (gender = "female");
console.log("The gender is: ", gender);

/*EX 2
 Write a piece of code for checking if, given two integers, 
 the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let firstInteger = 12;
let secondInteger = 20;
let isOneInterger8 = (firstInteger === 8) || (secondInteger ===8);
let isSumEqual8 = ((firstInteger + secondInteger) === 8) || ((firstInteger - secondInteger) === 8) || ((secondInteger - firstInteger) === 8);

if (isOneInterger8 || isSumEqual8) {
    console.log("Yes it's true");
} else {
    console.log( "No it's false");
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let thisIsAConcatenation = "I am on half " + "and I am the other half";
console.log(thisIsAConcatenation);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let firstVar = 22;
let secondVar = 1;
let thirdVar = 15;

let highestVar;
let middleVar;
let lowestVar;

if ((firstVar >= secondVar) && (firstVar >= thirdVar)) {
    highestVar = firstVar;
} else if ((firstVar >= secondVar) || (firstVar >= thirdVar)) {
    middleVar = firstVar;
} else {
    lowestVar = firstVar;
}

if ((secondVar >= firstVar) && (secondVar >= thirdVar)) {
    highestVar = secondVar;
} else if ((secondVar >= firstVar) || (secondVar >= thirdVar)) {
    middleVar = secondVar;
} else {
    lowestVar = secondVar;
}

if ((thirdVar >= firstVar) && (thirdVar >= secondVar)) {
    highestVar = thirdVar;
} else if ((thirdVar >= firstVar) || (thirdVar >= secondVar)) {
    middleVar = thirdVar;
} else {
    lowestVar = thirdVar;
}

console.log("The highest variable is: ", highestVar);
console.log("The middle variable is: ", middleVar);
console.log("The lowest variable is: ", lowestVar);

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let givenInteger1 = 4;
let givenInteger2 = 8;

let findingAverage = (givenInteger1 + givenInteger2) / 2;
console.log(findingAverage);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = "I am the first string.";
let string2 = "I am the second string.";
let longestString;

if (string1.length > string2.length) {
    longestString = string1;
} else if (string1.length < string2.length) {
    longestString = string2;
} else {
    longestString = "They have the same length.";
}

console.log("The longest string is: ", longestString);

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let maybeAnInteger = 1;

(maybeAnInteger % 1) === 0 ? (console.log("It is an integer")) : (console.log("It is not an integer..."));

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let randomNumber = 40;
let percentageSearched = 10;
let findPercentage = randomNumber * (percentageSearched / 100);
console.log(findPercentage);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

(randomNumber % 2) === 0 ? (console.log("The random number is even")) : (console.log("The random number is odd."));
