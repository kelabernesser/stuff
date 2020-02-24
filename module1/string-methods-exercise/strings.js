
function toUpper(string){
    var upper = string.toUpperCase()
    
    var lower = upper.toLowerCase()

    return lower

}

function middleIndex(string){
    var indexMiddle =  Math.floor((string.length) / 2)
    return indexMiddle
}

function firstHalf(string){
    
    var sliceWord = string.slice(0, middleIndex(string))
    return sliceWord

}

function secondHalf(string){
    var sliceWord = string.slice(middleIndex(string), (string.length))
    return sliceWord
}

function upperLower(string){
    var oneHalf = firstHalf(string).toUpperCase()
    
    var twoHalf = secondHalf(string).toLowerCase()

    var wobbleString = oneHalf.concat(twoHalf)

    return wobbleString
}

function capitalize(string){
    
}




console.log(toUpper("hello"))
console.log(middleIndex("hello"))
console.log(firstHalf("hello"))
console.log(upperLower("hello"))