//0-9
for(var i = 0; i < 10; i++){
    console.log(i)
}

//9-0
for(var i = 9; i > -1; i--){
    console.log(i)
}

//fruits
var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//push 0-9
var numbers = []
for(var i = 0; i < 10; i++){
    numbers.push(i)
}

console.log(numbers)

//only even numbers
for(var i = 0; i<101; i++){
    if(i % 2 === 0){
        console.log(i)
    }
   
}

var fruits2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for( var i = 0; i < fruits2.length; i++){
    if(i % 2 === 0){
        console.log(fruits2[i])
    }
}

//people array
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  //all the people
  for(var i = 0; i< peopleArray.length; i++){
      console.log(peopleArray[i].name)
  }

  //push name
  nameArray = []
  for(var i = 0; i<peopleArray.length; i++){
      nameArray.push(peopleArray[i].name)
      
  }

  console.log(nameArray)

  //push occupation
  occupationArray = []
  for(var i = 0; i <peopleArray.length; i++){
      occupationArray.push(peopleArray[i].occupation)
  }

  console.log(occupationArray)

  //every other name
  var everyOtherName = []
  for(var i = 0; i<peopleArray.length; i++){
    if(i % 2 === 0){
        everyOtherName.push(peopleArray[i].name) 
    }
    
}   
 console.log(everyOtherName)

 //every other occupation
  var everyOtherOccupation = []
  for(var i = 0; i<peopleArray.length; i++){
    if(i % 2 !== 0){
        everyOtherOccupation.push(peopleArray[i].occupation) 
    }
    
}   
 console.log(everyOtherOccupation)