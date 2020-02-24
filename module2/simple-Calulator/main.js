
const add = document.add.addEventListener("submit", function(e){
    e.preventDefault()

    
    var firstNumber = document.add.firstNumber.value
    var secondNumber = document.add.secondNumber.value
    document.add.firstNumber.value = ""
    document.add.secondNumber.value = ""

    var sum = parseInt(firstNumber) + parseInt(secondNumber)

    const h1 = document.createElement('h1')
    h1.style.backgroundColor = "lime"
    h1.style.margin = "10px"
    h1.style.padding = "10px"
    h1.style.border = "5px solid green"
    h1.style.textAlign = "center"
    h1.textContent = "The sum of two numbers =  " + sum
    document.getElementById("add").append(h1)
    
})

const subtract = document.subtract.addEventListener("submit", function(e){
    e.preventDefault()

    var firstNumber = document.subtract.firstNumber.value
    var secondNumber = document.subtract.secondNumber.value
    document.subtract.firstNumber.value = ""
    document.subtract.secondNumber.value = ""

    var difference = parseInt(firstNumber) - parseInt(secondNumber)

    const h1 = document.createElement('h1')
    h1.style.backgroundColor = "salmon"
    h1.style.margin = "10px"
    h1.style.padding = "10px"
    h1.style.border = "5px solid red"
    h1.style.textAlign = "center"
    h1.textContent = "The difference of two numbers =  " + difference
    document.getElementById("subtract").append(h1)

})

const multiply = document.multiply.addEventListener("submit", function(e){
    e.preventDefault()

    var firstNumber = document.multiply.firstNumber.value
    var secondNumber = document.multiply.secondNumber.value
    document.multiply.firstNumber.value = ""
    document.multiply.secondNumber.value = ""

    var product = parseInt(firstNumber) * parseInt(secondNumber)

    const h1 = document.createElement('h1')
    h1.style.backgroundColor = "aqua"
    h1.style.margin = "10px"
    h1.style.padding = "10px"
    h1.style.border = "5px solid teal"
    h1.style.textAlign = "center"
    h1.textContent = "The product of two numbers =  " +product
    document.getElementById("multiply").append(h1)

})