var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayMethods(arr, arr1, term) {


    //navigating vegetable array
    if (arr1) {

        //removing last item 
        arr1.pop()

        //adding the length number to the end of the array
        arr1.push(arr1.length)

        //return arr1





    }


    //navigating fruit array
    if (arr) {

      //removing first item
        var shiftItem = arr.shift()
        //index of an item
        var itemIndex = arr.indexOf(term)
        arr.push(itemIndex)

    
    }

   
        var food = arr.concat(arr1)
        food.splice(4,2)
        food.reverse()

        var foodFinal = "Food: " + food
        return foodFinal

        
}



//console.log(arrayMethods(vegetables))
console.log((arrayMethods(fruit, vegetables,"oranges")))












