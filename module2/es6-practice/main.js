const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => {
    return arr.filter(function(person) {
        return person.friendly
    })
}
console.log(filterForFriendly(people))

const doMathSum = (a, b) => {
    return a + b
}

var produceProduct = (a, b) => {
    return a * b
}

console.log(doMathSum(1,2))
console.log(produceProduct(1,2))

const printString = (firstName, lastName, age) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
}
console.log(printString("kela", "bernesser", 22))

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr) => {
    return arr.filter(animal => animal.type === "dog" ? true : false) 
    
 }
console.log(filterForDogs(animals))