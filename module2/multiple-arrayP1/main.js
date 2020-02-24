var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

/*peopleArray.sort(function(a, b){
    return a.age - b.age
})

peopleArray.sort(function(a, b){
    if(a.lastName < b.lastName){
        return -1
    }
    if(a.lastName > b.lastName){
        return 1
    }
})*/

peopleArray.forEach(function(name){
    name.innerHTML = "<li>" + name.firstName + " " + name.lastName + " is " + name.age + "</li>"

    
    peopleArray.sort(function(a, b){
        if(a.lastName < b.lastName){
            return -1
        }
        if(a.lastName > b.lastName){
            return 1
        }

    })
})

peopleArray.sort(function(a, b){
    return a.age - b.age
})
console.log(peopleArray)






