"use strict";
(() => {
    document.addEventListener('DOMContentLoaded', function () {
        // Function to add a yellow background to the last li in each ul
        function addYellowBackground() {
            const uls = document.querySelectorAll('ul');
            uls.forEach(ul => {
                const lis = ul.querySelectorAll('li');
                if (lis.length > 0) {
                    lis[lis.length - 1].style.backgroundColor = 'yellow';
                }
            });
        }

        // Function to make the lis bold when an h3 is clicked
        function makeLisBold() {
            const h3s = document.querySelectorAll('h3');
            h3s.forEach(h3 => {
                h3.addEventListener('click', function () {
                    const ul = this.nextElementSibling;
                    const lis = ul.querySelectorAll('li');
                    lis.forEach(li => {
                        li.style.fontWeight = 'bold';
                    });
                });
            });
        }

        // Function to change the font color of the first li when an li is clicked
        function changeFontColor() {
            const lis = document.querySelectorAll('li');
            lis.forEach(li => {
                li.addEventListener('click', function () {
                    const ul = this.parentElement;
                    const firstLi = ul.querySelector('li');
                    firstLi.style.color = 'blue';
                });
            });
        }

        // Add event listeners to the button and list items
        const button = document.createElement('button');
        button.textContent = 'Change Background';
        button.dataset.border = 'on';
        button.addEventListener('click', addYellowBackground);

        const main = document.querySelector('main');
        main.insertBefore(button, main.firstChild);

        makeLisBold();
        changeFontColor();
    });
})();