
//get submit button
const button = document.querySelector("button")

//get unordered list
var listOfItems = document.getElementById("list")

//get input box
var input = document.getElementById("title")



button.addEventListener("click", function addToList(e) {

    //create a list item element
    var li = document.createElement("li")

    //create edit button
    var editBtn = document.createElement("button")

    editBtn.textContent = "edit"
    editBtn.style.margin = "10px auto"
    editBtn.style.width = "35px"




    //creat exit button
    var exitBtn = document.createElement("button")

    exitBtn.textContent = "X"
    exitBtn.style.margin = "10px auto"
    exitBtn.style.width = "25px"

    exitBtn.addEventListener("click", exitFunction)

    //function to remove item
    function exitFunction() {
        listOfItems.removeChild(li)
        div.removeChild(editBtn)
        div.removeChild(exitBtn)
    }

    //prevents refereshing page when button is clicked
    e.preventDefault();

    li.setAttribute('id', input.value)
    li.appendChild(document.createTextNode(input.value))

    //create container for edit and exit
    const div = document.createElement("div")


    //add item to list
    listOfItems.appendChild(li)

    //add container to list
    listOfItems.appendChild(div)

    //put element in container
    div.appendChild(editBtn)
    div.appendChild(exitBtn)

    //function to edit
    editBtn.addEventListener("click", function editFunction() {

        
        editBtn.textContent = "save"
        var editInput = document.createElement("input")
        editBtn.appendChild(editInput)

        


    })








})



