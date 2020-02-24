const words = document.words.addEventListener("submit", function(e){
    e.preventDefault()

    var noun = document.words.noun.value
    var adverb = document.words.adverb.value
    var verb = document.words.verb.value

    alert("The "+ noun + " did " + adverb + " " + verb + " in it's home")
})