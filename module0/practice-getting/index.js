var result = dcocument.querySelectorAll("ol#fruits > li")
console.log(Array.from(result))

for( var i = 0; i < result.length; i++){
    result[i].textContent = "Strawberry"
}