"use strict";
(() => {
    const form =document.querySelector("#to-do-form");
    const addBtn =document.querySelector("#to-do-form button");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const input = document.querySelector("#to-do");// grab this from the id to-do
        const toDoList = document.querySelector("#to-do-list")
        const userInput= input.value;
        input.value = ""; //grabbed the data from user input

        const li = document.createElement("li");
        const p = document.createElement("p");
        const doneBtn = document.createElement("button");

        p.classList.add("m-0");
        doneBtn.classList.add("btn","btn-danger");
        li.classList.add("to-do-item"," list-group-item", "d-flex", "justify-content-between", "align-items-center");

        doneBtn.innerText="Done";
        p.innerText = userInput;

        toDoList.appendChild(li);
        li.appendChild(p);
        li.appendChild(doneBtn);

        doneBtn.addEventListener("click", () => {
            //e.target.parentElement.remove(); // from review
            toDoList.removeChild(li); // will always refer to specific li [<parent element>.removeChild(<child element to remove>)]

        });
    });
    //addBtn.addEventListner ("click, () => {}); structure the same content is different.
})();
