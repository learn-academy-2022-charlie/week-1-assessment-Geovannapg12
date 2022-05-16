// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"



// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
// const temp1 = 42
// const temp2 = 350
// const temp3 = 212

// Crate a conditional using the const variables that will give a response depending on the number used
  // use to for temp1 and temp3
  //if the number  is less than 42 you'll get "below boiling point"
  //for temp 2 use a strict equality operator so that it only responds  at the right temperature
// Run fucntion using console.log() with a number in the paranthesis to see what comes back
 //
 if (temp1 < 42){
   console.log("Below boiling point")
 } else if ( temp2 === 212){
   console.log("At boiling point")
 } else ( temp3 > 350){
   console.log("Above boiling point")
 }
 console.log(temp3)
 // It returs as a unexpected token {} I already checked a couple of times to see if theres an extra one or if I need to add one.


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

  const myNumbers1 = [3, 7, 0, 36, -9]
  const myNumbers2 = [8, -7, 42, 9, 13]
 //
 //  //Combine both const values in the console.log
 //  //Use accesor .concat to combine the two arrays together
 //  //Use mutator .length to show the number length of the two arrays together
 //  //Run it in the console.log
 console.log(myNumbers1.concat(myNumbers2).length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"
// Use one of the built-in methods to reverse the string
// Since currentCohort is a string we need to use .split to to turn it into an array
//After the .split("") we use mutator .reverse to reverse the letter in the array
//console.log
const currentCohort = "Charlie 2022"
console.log(currentCohort.split(" ").reverse)


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
// create a function that will divide each of the number in the array by 2 using % to check if there is a remainder
// If the number is divisible by two consiole.log("Even")
//if the number divided by 2 leaves a remainder of 1 then console.log("Odd")
  const myArray = [13, 34, 5, 10, 27, 42]
//
  if (myArray % 2 === 0){
    console.log("this number is even")
  } else if ( myArray % 2 === 1){
  console.log("this number is odd")
  }
// //^this one did not work
//
//second try using loops!!!!!
// for (let index = 0; index < myArray.length; index++){
//   if ( myArray[index] % 2 === 0){
//     console.log("number is even")
//   } else {
//     console.log("number is odd", myArray[index])
//   }
// }
// // I followed the example from the class notes ^ using loops. I belive the index and index++ work in the way that they take each of the numbers in the array one by one  and divide by 2 and checking if theres a remainder
//
//
//
// // --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3
//
// // Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// create a function with the name subtracts that will subtract the smaller number from the largest
// return either of the set numbers subtracted by the smaller number
//

//
const  subtract = (num1, num2) => {
  return num1 - num2
}
// console.log(subtract(100,58))
console.log(subtract(27,24))
