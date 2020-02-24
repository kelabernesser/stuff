const arr = [1, 3, 5, 2, 90, 20]

/*arr.sort(function(a, b){
    return a - b
})

console.log(arr)*/

arr.sort(function(a, b){
    return b - a
})

console.log(arr)

const words = ["dog", "wolf", "by", "family", "eaten"]

/*words.sort(function(a, b){
   
    return a.length - b.length
})

console.log(words)*/

words.sort(function(a, b){

    if(a < b){
        return -1
    }
    if(a > b){
        return 1
    }
   
})

console.log(words)

const people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }

]

people.sort(function(a, b){
    return a.age - b.age
})

console.log(people)