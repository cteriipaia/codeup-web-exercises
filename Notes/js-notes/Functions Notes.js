// Example 1
no usages

function helloWorld(){

    console.log("hi imugi")
    return "Hello World";
}

//Example 2 (A function with inputs)
no usage
functions addNumbers(num1, num2){
    let sum = num1 + num2;
    return sum
}

let sum = addNumbers(num1: 5, num2: 5);
console.log(sum);

let anotherSum = addNumbers (sum, num2:10);
console.log(anotherSum);

//return is to give the output


//let sum = addNumbers (5, 5);
// console.log (sum)

// ANNONYMOUS FUNCTIONS
//1 usage


// varAlert

// LOCAL VARIABLE
1 usage

function localVarAlert(){
    let localVar = "Look, I'm a local"
    alert(localVar);
    alert(globalVar);
    return localVar;
}

// alert(localVar)
let local = localVarAlert();
console.log(local);

//-------------Guidelines and Best Practices---------------

// -If your function hits 20 lines consider refactor