"use strict";

// number-utils.js
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export default generateRandomNumber;