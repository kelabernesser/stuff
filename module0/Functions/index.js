//return sum
function sum(num1, num2){
    return num1 + num2
}

//ex.
console.log(sum(1, 3))

//return largest of three
function largest(num1, num2, num3){
    
    if(num1 > num2){
        var largest = num1;
    }
    else{
        largest = num2
    }
    if(largest > num3){
        return largest
    }else{
        return num3
    }
    
    

}
//ex.
console.log(largest(4, 10, 12))

//return even or odd
function even(number){
    if(number % 2 == 0){
        console.log("even")
    } else{
        console.log("odd")
    }
}

//ex.
even(6)

//less than twenty
function lengthTwenty(string){
    if(string.length <= 20){
        return string + string
    } else{
        return string.substring(0, string.length / 2)
    }
}

//ex.
console.log(lengthTwenty("betos"))

console.log(lengthTwenty("kkkkkkkkkkppppppppppp"))

var firstArray = ["apples", "oranges"]
function firstItem(array){
    return array[array.length-1]

}
console.log(firstItem(firstArray))