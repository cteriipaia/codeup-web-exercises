"use strict";

// greeting-control.js
import {getRandomGreeting} from "./greeting-logic.js";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("greetingForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("nameInput");
        const greetingOutput = document.getElementById("greetingOutput");

        const userName = nameInput.value;
        const randomGreeting = getRandomGreeting();

        greetingOutput.textContent = `${randomGreeting}, ${userName}!`;
    });

    // From Review
    //
    // import {getRandomGreeting} from "./greeting-logic.js";
    //
    // document.forms.nameSubmit.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     let name = document.querySelector("#name").value;
    //     let greeting = getRandomGreeting();
    //
    //     let p = document.createElement("p");
    //     p.innerText = `${greeting}, ${name}.`;
    //     document.querySelector("#message-here").innerHTML = "";
    //     document.querySelector("#message-here").appendChild(p);
    // })

})