// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

const picture = ["abc",
           "ded"]

const addBorder = (arr) => {
    let decoratedRow = ""
    

    const newArr = []
    for(let i = 0; i < arr[0].length + 2; i++){
        decoratedRow += "*"
    }
    newArr.push(decoratedRow)
    for(let i = 0; i < arr.length; i++){
        let row = '*'
        for(let j = 0; j < arr[i].length ; j++){
            row += arr[i][j]
        }
        row += '*'

        newArr.push(row)
    }
    
    
    newArr.push(decoratedRow)
    return newArr
}

for (var i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 1)
}