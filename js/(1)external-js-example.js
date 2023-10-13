"use strict";

let pi=3.14;
pi=22/7;
console.log(pi);

console.log(5 + 4); // Console logs print to the console, and ONLY print to the console.
let instructorName = "David"
console.log(instructorName);

let favoriteColor = "Green";
console.log(favoriteColor);

//Alert! - A pop-up message to the user from Javascript
alert("Howdy from Javascript");

//We can concatenate inside of the an alert!
alert("Howdy from, " + instructorName);

//Confirm - A pop-up message to the user from Javascript, that has the ability to capture a boolean
let confirmed = confirm ("We have lunch today at 12:30 today?");
console.log(confirmed);

//Prompt - A pop-up message to the user from Javascript that asks for a text value.
let userString = prompt("What is your favorite basketball team?");
console.log(`User's favorite team: ${userString}`);
