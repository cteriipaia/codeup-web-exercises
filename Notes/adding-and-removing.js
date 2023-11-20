//Creating Elements
//document.createElement(<element tag name>);
const myNewP = document.createElement("p");
myNewP.innerText = "I'm a new paragraph!";
myNewP.id = "myNewP";
myNewP.classList.add("fs-2", "fw-bold", "text-center");

//<parent element>.appendChild(<new child element>);
document.querySelector("#newContent").appendChild(myNewP);


//Removing an Element
//<parent element>.removeChild(<child element to remove>)
/*For example, let's add another paragraph to our document:*/
const myOtherP = document.createElement("p");
myOtherP.innerText = "I'm a paragraph too!";
myOtherP.classList.add("text-center");
document.querySelector("#newContent").appendChild(myOtherP);
/*We can now remove the paragraph as follows:*/
document.querySelector("#newContent").removeChild(myOtherP);

