// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Created variable called name and stored Dane as string data.
// Set conditional statment for name to console.log "Hi, Mary!" if and only if name is "Mary",
// otherwise if name is anything else console.log "How do you do?".
// We should expect to see "How do you do?" as "Dane" is not "Mary".

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Created secret as an undefined variable so that it may accept a conditional value in the future.
// Created variable called code and set its value to 123 as an iteger.
// First conditional statement says: 
// Assign the string value of 'super' to secret, then change the value of code by multiplying its current value by 2, if and only if (iff) code is equal to 123.  
//    # this will run because code is exactly 123, which sets "super" as the value of secret and then multiplies code by 2 changing its
//      value to 246. 
// Second conditional statement says:
// Assign the string value of 'duper' to secret if the value of code is greater than 250.
//    # this will not run because the value of code is not greater than 250.
// Lastly, the console.log will print the current value of secret which is 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Created vartiable called isStudent and set a boolean value of true.
// Created variable called age and set its value to 34 as an integer.
// Created variable called zip and set its value to REPRESENT! erm.. 55407 as an integer.
// Conditional statement says:
// First try,
// console.log `You're a student on the West Coast!` iff the value of isStudent is true AND the value of zip is greater than 80000.
//    # this will not run because the value of zip is 55407 which is less than 80000, both conditionals need to apply. 
// Then try,
// console.log 'What are your hobbies?' iff the value of isStudent is false OR if the value of age is less than 30. 
//    # this willl not run because neither of the conditionals match/apply to the values of isStudent or age.
// Then try,
// console.log 'Welcome to Prime!' iff the value of isStudent is true.
//    # we would expect to see this in the console as the value for isStudent is true.
// If none of the others work try,
// console.log 'How about the weather?'.
//    # this will not run becasue one of the conditions was met.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX - Only colorOne is being reassigned to purple, but the instructions say that both colorOne and colorTwo need to change to 'purple'.
  // Possible solution - add colorTwo = 'purple'; on a new line above or below colorOne = 'purple';. 
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - if (temp > 39 || time >= 4) does not match the description above, || is OR not AND. 
// Possible solution - replace || with &&.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - Conditional logic does not match the description -  minAge is being checked against age
// Possible solution - change conditional statement to read as follows: 
// if (age >= minAge){
  console.log('Enter')
} else {
  console.log('No entry.')
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

