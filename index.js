/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/


/* 1) Numbers: Numbers in js are like numbers in maths class that you can count. They can go from a very high number in the negatives, to a very high number in the positives. They can be interger or floating. Sometime you might find an impossible one, like 23/0 for example. The computer will return NaN, which stands for not a number. Although it technically is.
2) Strings: Strings in js are usually words or sentences, but they can contain numbers too. The computer will use the string as one and render it exactly that way. It has to be put in quotes.
3) Undefined: Undefined means that the computer doesn't know what the variable contains, because nobody told him yet.
4) Null: Null means that the variable is empty.
5) Boolean: Boolean can be either true or false.
6) BigInt: Big int are numbers even higher than regular numbers. We will probably never need them.
7) Symbols: We will probably never need symbols either.*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* A variable is like a container that holds a specific type of data. We have to create it by declaring it with let and then add it's name. It's content can be changed, added or deleted.*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let executeAddition = 12 + 20;
console.log("This is the result of executing the addition of 12 and 20:", executeAddition);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log(x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";
console.log(name);

//VSCode is telling be that the variable name "name" is depricated. It shouldn't be used. It can still be printed.

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let substracting12FromX = x - 12;
console.log(substracting12FromX);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
let compareNames = name1 === name2;
console.log(compareNames);

let compareNamesInLowerCases = name1.toLowerCase() === name2.toLocaleLowerCase();
console.log(compareNamesInLowerCases);

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 6; 
//I can't assign the same name to another variable, so I reused the variable from exercise 4. Recycling variable :D
if (x === 1){
    console.log("one");
} else if (x === 2) {
    console.log("two");
} else if (x === 3) {
    console.log("three");
} else if (x === 4) {
    console.log("four");
} else if (x === 5) {
    console.log("five");
} else if (x === 6) {
    console.log("six");
} else if (x === 7) {
    console.log("seven");
} else if (x === 8) {
    console.log("eight");
} else if (x === 9) {
    console.log("nine");
} else {
    console.log("The number does not meet the expectations.");
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let height = 172;
let ridingRollerCoaster;

height >= 150 ? (ridingRollerCoaster = "You can ride the roller coaster!") : (ridingRollerCoaster = "You cannot ride the roller coaster.");

console.log(ridingRollerCoaster);
