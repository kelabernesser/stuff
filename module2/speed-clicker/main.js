const clickMe = document.getElementById("button")

let count = 0

const body = document.getElementsByTagName("body")[0]
const showCount = document.createElement('h1')
showCount.textContent = localStorage.getItem("count")
body.append(showCount)

clickMe.addEventListener("click", function(e){
    e.preventDefault()

    count = JSON.parse(localStorage.getItem("count")) + 1

    localStorage.setItem("count", count)
    

    showCount.textContent = localStorage.getItem("count")
    
   // body.append(showCount)

    
})





