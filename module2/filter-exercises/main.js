const arr = [3, 6, 8, 2]

const fiveAndGreater = arr.filter(function (num) {
    if (num >= 5) {
        return true
    }
})

//console.log(fiveAndGreater)

const evenNum = arr.filter(function (num) {
    if (num % 2 === 0) {
        return true
    }
})

//console.log(evenNum)

const words = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveFewer = words.filter(function (word) {
    if (word.length <= 5) {
        return true
    }
})

//console.log(fiveFewer)

const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const illuminati = people.filter(function(person){
    return person.member
})
 
console.log(illuminati)

const ages = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }

]

const ageCheck = ages.filter(function(person){
    if(person.age >= 18){
        return true
    }
})

console.log(ageCheck)