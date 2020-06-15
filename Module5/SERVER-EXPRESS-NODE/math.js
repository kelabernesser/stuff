function sum(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

//exposed the function its now available to be imported or required
//module.exports = sum 

//cannot duplicate line
//module.exports = subtract

//make an object
module.exports = {sum,subtract}