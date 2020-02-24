var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//split the characters in the string up
//var output = input.split("")

function caesarCipher() {
    var newWord = ""

    for (var i = 0; i < input.length; i++) {

        if (input[i].indexOf(" ") !== -1) {

            var newLetter = " "
        }
        else {
            var findOutIndex = alphabet.indexOf(input[i])
             var newShift = shift + findOutIndex
            var newLetter = alphabet[newShift % alphabet.length] 


        }



        newWord = newWord + newLetter


    }


    return newWord

}




//will shift to an index, based on user input
var numberToShift = alphabet[shift]
console.log(caesarCipher())

