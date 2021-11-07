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
// We make a variable called Name and assign the value to the string 'Dane'
// We set a conditional that says if the name is Mary, the console.log will return the string 'Hi, Mary!'
// If the statement is false or anything besides Mary the console.log will return the string 'How do you do'
//

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
// We create a variable named secret
// we set a variable code to the numeric value 123
// we check if the code value equals 123
// and if it does we set the value of the variable secret to the string secret
// and change the value code to 123 * 2
// we then check if the code is greater than 250
// if it does we set the value of the variable secret to the string duper
// we then console log the value of the variable secret


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
// we create a variable isStudent and set it to the boolean value of true
// we then create a variable age and set it to the numeric value of 34
// we then create a variable zip and set it to the numeric value of 55407
//if the variable isStudent is true and the zip is less than 80000 the console.log will return the string 'You're a student on the West Coast!;'
//if value is false for student and the age is less than 30 the console.log will return the string 'What are your hobbies?'
//the next conditional says that if the variable isStudent === true the console.log will return the string 'Welcome to Prime!'
//If the variable is false then the console log will return the string 'How about the weather?'




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
// FIX - colorOne variable needs to be set to 'red' and colorTwo needs to be set to 'blue'
//colorTwo = 'purple needs to be added to the conditional statement to make the return true
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'
// FIX - const should be set to var instead because the variable time in the conditional maybe a different value and making it a constant would mean it can't be a value other than 4.
// || symbol should be changed to && because || makes it an or statement
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.
/* Fix - the first conditional should be (age < minAge) instead because no entry should be granted to under 21 and 21 year olds are allowed to enter
Conditional would make more sense if it read
if(age < minAge) {
  console.log ('no entry');
} else if (age => minAge){
  console.log ('enter');
}
/The second line would allow 21 year olds and over to enter
*/
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
