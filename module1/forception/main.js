var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function jonSong(arr, arr1) {

    var endSong = []
    var upper = arr1.toUpperCase()
    var splitA = upper.split("")
    for (var i = 0; i < arr.length; i++) {
        
        endSong.push(arr[i] + ":")

        for (var j = 0; j < splitA.length; j++) {

            endSong.push(splitA[j])

        }
    
    }
    return endSong

}


console.log(jonSong(people, alphabet))