const clickMe = document.getElementsByTagName("button")[0]

let count = 0 || localStorage.getItem("count")

const body = document.getElementsByTagName("body")[0]

let clicker = document.createElement("h1")

clicker.textContent = count
clickMe.addEventListener("click", function(e){

   // e.preventDefault()

    count++

    clicker.textContent = count

    //body.append(clicker)

    localStorage.setItem("count", count )

    clicker.innerHTML = (localStorage.getItem("count"))

    

    
    
})

body.append(clicker)






