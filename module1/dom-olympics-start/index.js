
const header = document.querySelector(".header")
header.textContent = "JavaScript Made This"

const name = document.querySelector(".name")
name.textContent = "[Kela Bernesser]"
header.appendChild(name)

const div = document.createElement("span")
div.textContent = "wrote the JavaScript"
header.appendChild(div)


const messageLeft = document.getElementsByClassName("message left")
messageLeft[0].textContent = "Lets talk about something fun!"
messageLeft[1].textContent = "We can talk about rollercoasters"

const messageRight = document.getElementsByClassName("message right")
messageRight[0].textContent = "Ok! What do you wanna talk about?"
messageRight[1].textContent = "I friggin love rollercoasters"

const messages = document.getElementsByClassName("messages")

const clearBtn = document.getElementById("clear-button")
clearBtn.addEventListener("click", btnFunction)
function btnFunction(){
    if(clearBtn){
        messages[0].remove(); 
    }
 }



const theme = document.querySelector("select")
theme.addEventListener("change", changeTheme)

function changeTheme(){
    if(theme.childNode[0]){
        messageLeft.style.backgroundColor = "red"
    }
    
}
    













