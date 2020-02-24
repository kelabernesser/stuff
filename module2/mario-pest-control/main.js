const marioForm = document.form

marioForm.addEventListener("submit", function(e){
    e.preventDefault()

    const goombas = marioForm.goombas.value * 5
    const bobombs = marioForm.bobombs.value * 7
    const cheepCheeps = marioForm.cheepCheeps.value * 11

    marioForm.goombas.value = ""
    marioForm.bobombs.value = ""
    marioForm.cheepCheeps.value = ""

    /*alert(goombas + bobombs + cheepCheeps)*/

    var h4 = document.createElement('h4')

    total = goombas + bobombs + cheepCheeps
    total.value = ""
    
    h4.textContent = total

    h4.style.color = "white"

    h4.style.fontSize = "80px"

    const div = document.getElementById("princess")

    div.append(h4)
    


})

