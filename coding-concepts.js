// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: it will come back as number 10
// b) Verify and explain: the .lenght counts the number of characters inside the string, learn is 5 and 2022 is 4 but the space in between those counts as a character so in total is 10.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: I belive it will show one of the letters, the letter "o" of Hello
// b) Verify and explain: I was correct, it returned the letter "o" I know that in coding when we search for the placing of a letter it starts with 0, so if we start counting from zero in the "Hello world" the letter o is the fourth.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: I think that it will show the either the first letter of the first word or the first word "JavaScript" but the index 1 is throwing me off a little
// b) Verify and explain: It showed "Ruby", because when the index was added it was looking for the first value (Ruby) so because the string is zeroth indexed the 0 is "JavaScript"


// --------------------4) What will this log?

 cosnt weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: the value of weekendDays will come back in all upper case letters.
// b) Verify and explain: I get an error saying that .toUpperCase is not a function. I know .toUpperCase upper cases the letters because I saw it in the intro and also on the syllabus. Maybe it has something to do with the const but I doubt it
    //-var greeting = "hello"
    //
    // // upcase all the letters in a string
    // console.log(greeting.toUpperCase())
    // // output --> "HELLO"

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)
// number

// a) Your answer: the length number of the characters, maybe it will be 21 because I think the spaces count as a character. But I am not completely sure since they are separated by the quotation marks.
// b) Verify and explain: "typeof allows programmer to quickly check a variable's data type—or whether it's “undefined” or “null”—without going through the code line by linex" I was very wrong, I did not pay attention to the typeof, so I didnt really know why I got back "number" instead of a number. If I take off the typeof I get a three because there are 3 strings or something like that, so the typeof is checking what kind of data type the values are which is a number
