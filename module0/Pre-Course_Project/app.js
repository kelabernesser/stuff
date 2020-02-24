var plants = ["cactus", "algae", "moss", "fern", "liverwort" ]
var green = {
    defintion: 'a living organism, typically growing in a permanent site absorbing water and inorganic substanstances through its roots'
}
function typesOfPlants()
{
    for(let i = 0; i < plants.length; i++){
        alert(plants[i])
    }
   
}

function plantDefintion()
{
    let button2 = ''
    if(button2 === 'on'){
        alert(green.defintion)
    } else if (button2 === 'off'){
        alert("Turn it back on!")
    } else {
        alert("its not on!")
    }


    
}



const button1 = document.getElementById("button-1")
button1.addEventListener("click", typesOfPlants)

const button2 = document.getElementById("button-2")
button2.addEventListener("click", plantDefintion)




