const input = "bookkeeper larry"

const noDuplicates = (string) =>{
    let singleLetters = []
    let arr = string.split('')

    arr.filter(function(letter){
        if(singleLetters.indexOf(letter) === -1){
            singleLetters.push(letter)
            
        }
    })

    return singleLetters
}
console.log(noDuplicates(input))