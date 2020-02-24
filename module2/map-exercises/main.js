let numbers = [1, 2, 3, 4]

const doubleNumbers = numbers.map(function (num) {
    return num * 2
})

console.log(doubleNumbers)

const stringItUp = numbers.map(function (num) {
    return num.toString()
})

console.log(stringItUp)

let names = ["kela", "david", "aaron", "elijah"]
const capitalize = names.map(function (name) {

    return name[0].toUpperCase() + name.slice(1, name.length)
})

console.log(capitalize)

let people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const namesOnly = people.map(function (person) {
    return person.name
})

console.log(namesOnly)

const underAge = people.map(function (person) {
    if (person.age >= 18) {
        return person.name + " can go to The Matrix"
    }
    else {
        return person.name + " is under age!!"
    }
})

console.log(underAge)



const organize = people.map(function (person) {

    person.name = document.createElement("h1")
    person.age = document.createElement("h2")


    return person.innerHTML = "<h1>person.name</h1><h2>person.age</h2>"



})

console.log(organize)