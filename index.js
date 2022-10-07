/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 1");
function area(l1, l2) {
  return l1 * l2;
}

const areaOfRectangle = area(4, 7);
console.log("The are is: ", areaOfRectangle);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 2");
function crazySum(a, b) {
  if (a === b) return (a + b) * 3;
  if (a !== b) return a + b;
}

const result = crazySum(4, 5);
console.log("This is the result: ", result);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 3");
function crazyDiff(c) {
  if (c <= 19) return 19 - c;
  if (c > 19) return c - 19;
}
const difference = crazyDiff(4);
console.log("The difference is: ", difference);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 4");
function boundary(n) {
  if (n >= 20 && n <= 100) return true;
  if (n === 400) return true;
  else return false;
}

const integer = boundary(120);
console.log("Result: ", integer);
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 5");
let ourString = "Students are the best students";
let ourArray = ourString.split(" ");
function strivify(n) {
  if (ourArray[0] === n) return ourString;
  if (ourArray[0] !== n) return n.concat(" ", ourString);
  else return "Please input a String";
}
const ourCase = strivify("Strive");
console.log(ourCase);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 6");
function check3and7(n) {
  if (n % 3 === 0 || n % 7 === 0) return true;
}
const multiple = check3and7(21);
console.log(multiple);
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 7");
let givenString = "This is a string";
function reverseString(a) {
  return givenString.split("").reverse().join("");
}
const reversed = reverseString(givenString);
console.log("Reversed string: " + reversed);

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 8");
const str = "The quick brown fox jumps over the lazy dog.";
const splitStrArr = str.split(" ");

let sentence = "";
function upperFirst(m) {
  for (let i = 0; i < splitStrArr.length; i++) {
    let capitalizedWord = "";
    const word = splitStrArr[i];

    capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1) + " ";
    sentence += capitalizedWord;
  }
}

upperFirst(str);
console.log(sentence);

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 9");
let newString = "Character";
function cutString(str) {
  return newString.slice(1, -1);
  //   console.log(cutted);
}
let cutted = cutString(newString);
console.log(cutted);

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 10");
function giveMeRandom(n) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 10));
  //   console.log(randomArray);
}
let random = giveMeRandom(33);
console.log(random);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
