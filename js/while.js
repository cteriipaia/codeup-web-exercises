"use strict";
//While Loops
//Create a while loop that uses console.log() to create the output shown below.
//
//  2
//  4
//  8
//  16
//  32
//  64
//  128
//  256
//  512
//  1024
//  2048
//  4096
//  8192
//  16384
//  32768
//  65536
let number = 2;

while (number <= 65536) {
    console.log(number);
    number *= 2;
}
//Do While loops
//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
//
// // This is how you get a random number between 50 and 100
// let allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

let allCones = Math.floor(Math.random() * 50) + 50;

console.log("Starting with " + allCones + " ice cream cones.");

do {
    // Generate a random number between 50 and 100 for the customer
    let conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought <= allCones) {
        console.log(conesBought + " cones sold...");
        allCones -= conesBought;
    } else {
        console.log("Cannot sell you " + conesBought + " cones, I only have " + allCones + "...");
    }
} while (allCones > 0);

console.log("Yay! I sold them all!");

/* Notes from review
let val = 2;
while (val <= 65536) {
    console.log(val);
    val *= 2
}

let pow = 1;
while (pow < 17) {
    console.log(2 ** pow);
    pow++;
}

let inventory = Math.floor(Math.random() * 50) + 50;

do {
    let conesOrdered = Math.floor(Math.random() * 5) + 1;
    if (conesOrdered > inventory) {
        console.log(`Sorry, I cannot sell you ${conesOrdered}, as we only have ${inventory} cones left in stock...`);
    } else {
        console.log(`Here are your ${conesOrdered} ice cream cones. We now have ${inventory - conesOrdered} left in inventory.`);
        inventory -= conesOrdered;
    }
} while (inventory !== 0);
console.log("Yay! I'm free of my ice cream prison!");*/
