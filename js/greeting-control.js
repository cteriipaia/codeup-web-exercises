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
});