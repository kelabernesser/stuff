const readlineSync = require("readline-sync")


var number1 = readlineSync.question("Please enter you first Number: ")
var number2 = readlineSync.question("Please enter your second Number: ")

var simpleFunction = ['add', 'multiply', 'divide', 'subtract']
var mainFunction = readlineSync.keyInSelect(simpleFunction, "Please enter the operation to perform: ")



  
//function that adds two numbers and returns the result
function addingNumbers(num1, num2){
    console.log( "The result is: " +(parseInt(num1) + parseInt(num2)))
}

//function that multiplies two numbers
function multiplyNumbers(num1, num2){
    console.log("The result is: " +(parseInt(num1) * parseInt(num2)))
}

//function that divides two numbers
function divideNumbers(num1, num2){
    console.log("The result is: "+ (parseInt(num1) / parseInt(num2)))
}

//function that subtracts two numbers
function subtractNumbers(num1, num2){
    console.log("The result is: "+ (parseInt(num1) - parseInt(num2)))
}


if(mainFunction === 0){
    addingNumbers(number1, number2)
    
} else if (mainFunction === 1){
    multiplyNumbers(number1, number2)

} else if (mainFunction === 2){
   divideNumbers(number1, number2)

} else if (mainFunction === 3) {
    subtractNumbers(number1, number2)
}

