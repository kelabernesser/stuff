var myGreeting = document.getElementById("greeting")

myGreeting.style.backgroundColor = "pink"
myGreeting.style.color = "red"


const h1 = document.createElement("h1")
h1.textContent = "oh hey there!"
myGreeting.appendChild(h1)

var myList = document.getElementById("list")
const ol = document.createElement("ol")
ol.textContent = ["dog", "cat", "mouse"]
myList.appendChild(ol)



console.dir(myGreeting.style)