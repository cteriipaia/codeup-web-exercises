"use strict";

console.log("Hello from external JavaScript");

//Use the alert function to show a message that says 'Welcome to my Website!'.

alert("Welcome to my Website!");

//Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that
// says that the color entered is your favorite color too.
//
// For example, if the user enters "blue", your code should alert a message that says:
//
// "Great, blue is my favorite color too!"

let userFavoriteColor = prompt("What is your favorite color?");
alert(`Wow, ${userFavoriteColor} is also my favorite color!`);

    //let userString = prompt("What is your favorite color?");
    //console.log("User's favorite color: ${userString}");
    //alert(`Great, ${userString} is my favorite color too!`);

//Complete exercise 3 from the previous lesson, but write your code in the external.js file
// instead of in the console.
//
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

    //You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
    // and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
    // how much will you have to pay?

    //let littleMermaidInput = prompt("It seems you have a past due amount for rentals already checked out." +
    //    "Please answer the following questions: How long did you rent The Little Mermaid? Just a reminder " +
    //    "rentals are $3 per day each.");
    //   alert(`You owe \$${littleMermaidInput * 3} on The Little Mermaid.`)
    //let brotherBearInput = prompt("How long did you rent Brother Bear? Just a reminder " +
    //    "rentals are $3 per day each.");
    //    alert(`You owe \$${brotherBearInput * 3} on The Brother Bear.`)
    //let herculesInput = prompt("How long did you rent Hercules? Just a reminder " +
    //    "rentals are $3 per day each.");
    //    alert(`You owe \$${herculesInput * 3} on Hercules.`)

    //alert(`Your total before you can rent again is: $${(parseFloat(littleMermaidInput) + parseFloat(brotherBearInput) +
    //    parseFloat(herculesInput)) * 3 } `)

let rentalRate = parseFloat(prompt("How much does it cost to rent a movie for a day?"));

let littleMermaidDays = parseFloat(prompt("How long did you want to rent \"The Little Mermaid\" for?"));
let brotherBearDays = parseFloat(prompt("How long did you want to rent \"Brother Bear\" for?"));
let herculesDays = parseFloat(prompt("How long did you want to rent \"Hercules\" for?"));

let totalSpent = (littleMermaidDays + brotherBearDays + herculesDays) * rentalRate;

alert(`User want to rent "The Little Mermaid" for ${littleMermaidDays} days, "Brother Bear" for ${brotherBearDays} days, 
and "Hercules" for ${herculesDays} days. It costs $${rentalRate.toFixed(2)} to rent a movie for a day.\n\nThe 
final total is $${totalSpent.toFixed(2)}`);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
// rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this
// week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let amazonRate = parseFloat(prompt("How much are you paid by Amazon per hour?"));
let amazonHours = parseFloat(prompt("How many hours did you work for Amazon this week?"));

alert(`User worked for Amazon for ${amazonHours} hours this week at a rate of $${amazonRate.toFixed(2)} per hour.\n\nUser is paid: $${(amazonHours * amazonRate).toFixed(2)}`);

let metaRate = parseFloat(prompt("How much are you paid by Meta per hour?"));
let metaHours = parseFloat(prompt("How many hours did you work for Meta this week?"));

alert(`User worked for Meta for ${metaHours} hours this week at a rate of $${metaRate.toFixed(2)} per hour.\n\nUser is paid: $${(metaHours * metaRate).toFixed(2)}`);

let googleRate = parseFloat(prompt("How much are you paid by Google per hour?"));
let googleHours = parseFloat(prompt("How many hours did you work for Google this week?"));

alert(`User worked for Google for ${googleHours} hours this week at a rate of $${googleRate.toFixed(2)} per hour.\n\nUser is paid: $${(googleHours * googleRate).toFixed(2)}`);

let finalTakeHomePay = (googleRate * googleHours) + (metaRate * metaHours) + (amazonRate * amazonHours);
alert(`User's final take home pay is: $${finalTakeHomePay.toFixed(2)}`);

//let googleInput = prompt("It seems that you have worked in at Google, Amazon, and Facebook as a " +
//    "contractor in the past.Do you remember how many hours your worked for Google?");
//alert(`Google owes you \$${googleInput * 400}.`)
//let amazonInput = prompt("How many hours did you work for Amazon?");
//alert(`Amazon owes you \$${amazonInput * 380}.`)
//let facebookInput = prompt("How many hours did you work for Facebook?");
//alert(`Facebook owes you \$${facebookInput * 350} .`)

//alert(`The total amount owed to you is $${(parseFloat(googleInput) * 400) + (parseFloat(amazonInput) * 380) +
//(parseFloat(facebookInput) * 350)}`)