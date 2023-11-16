"use strict";

(() => {
    // setTimeout(() => document.querySelector("#profile-pic").setAttribute("src", "images/optimus-head.webp"),2000);

/*Use setTimout to create these behaviors.*/

    // Two seconds after the page loads, change the "profile-pic" src attribute to a different image.

    setTimeout(() => document.querySelector("#profile-pic").src = "img/Codette.png",2000);

    //Four seconds after the page loads, use innerHTML to change the name in "profile-name".

    setTimeout(() => document.querySelector("#profile-name").innerText = "Codette the Duck", 4000);

    //Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.

    setTimeout(() => document.querySelector("#profile-desc").classList.add("fancy"), 6000);

    //Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.

    setInterval(() => {document.querySelector("#profile-card").classList.toggle("disco")}, 2000)
})();