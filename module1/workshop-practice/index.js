/*const meals = ["big chef salad", "burger", "ramen", "sushi burrito"]

function hasTerm(num, term) {

    for (var i = 0; i < num.length; i++) {
        if (arr[i] === term) {
            return true
        }
        else {
            return 0;
        }

    }
}
hasTerm(meals, "ramen")
hasTerm(meals, "sandwich")*/


//find largest number
var max = 0;
var maxArray = [3, 5, 2, 8, 1]
for (var i = 0; i < maxArray.length; i++) {

    if (maxArray[i] > max) {
        max = maxArray[i]

    }

}

console.log(max)

var lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]
var letters = /^[A-Za-z]+$/
for (var i = 0; i < lettersWithStrings.length; i++) {
    
    if(lettersWithStrings[i]===(letters)){
        console.log(lettersWithStrings[i])
    }

}

function buzzFunc(num){


    for(var i = 0; i < num; i++){
        
        if(i % 3 === 0 && !(i % 5 === 0)){
             console.log("fizz")
        }
        else if(i % 5 === 0 && !(i % 3 === 0)){
            console.log("buzz")
        }
        else if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz")

        }
        else{
            console.log(i)
        }


    }

    

}

console.log(buzzFunc(101))
