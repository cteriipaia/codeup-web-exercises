"use strict";

// 2. Prompt the user for an odd number between 1 and 50. Use a loop and a
// break statement to continue prompting the user if they enter invalid input.

let userInput;
do {
    userInput = parseInt(prompt("Please enter an odd number between 1 and 50:"));
} while (userInput < 1 || userInput > 50 || userInput % 2 === 0);
/* Notes from Review
let userNum = 0;

while (true) { // infinite loop
    userNum = parseInt(prompt("Hey, gimme an odd number between 1 and 50!"));
    if (userNum >= 1 && userNum <= 50 && userNum % 2 !== 0) {
        break;
    }
}*/
// Output the number to skip
console.log("Number to skip is: " + userInput);

// Output odd numbers between 1 and 50, except for the user's input
for (let i = 1; i <= 50; i += 2) {
    if (i === userInput) {
        console.log("Skip number: " + userInput);
        continue;
    }
    console.log("Here is an odd number: " + i);
}
// Notes from Review
// for (let i = 1; i < 50; i += 2) {
//     if (i === userNum) {
//         console.log(`OOPS! We're gonna skip that odd number of ${userNum}`);
//     } else {
//         console.log(`Here is an odd number: ${i}`);
//     }
// }
/*
for (let i = 1; i < 50; i += 2) {
    if (i === userNum) {
        console.log(`OOPS! We're gonna skip that odd number of ${userNum}`);
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}*/
