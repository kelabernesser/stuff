//const axios = require("axios");

function getData() {
    axios.get("https://api.vschool.io/kelaBernesser/todo")
        .then(res => createTodo(res.data))
        .catch(err => console.log(err))


}


function deleteData(data) {
    for (var i = 0; i < data.length; i++) {
        axios.delete("https://api.vschool.io/kelaBernesser/todo/" + data[i]._id)
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }
}




function createTodo(data) {
    clearList()
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div')
        div.classList.add("listItems")
        document.getElementById('to-do-list').appendChild(div)
        const h1 = document.createElement('h1')
        h1.style.color = "white"
        h1.textContent = data[i].title
        div.appendChild(h1)
        
        const h3 = document.createElement('h2')
        h3.textContent = data[i].description
        h3.style.color = "white"
        h3.style.fontStyle = "italic"
        div.appendChild(h3)

        const price = document.createElement('h4')
        price.style.color = "white"
        price.textContent = data[i].price
        div.appendChild(price)

        const imgUrl = document.createElement('img')
        imgUrl.width = 100;
        div.style.backgroundImage = data[i].imgUrl
        imgUrl.src = data[i].imgUrl
        
    
        div.appendChild(imgUrl)

        const completeButton = document.createElement('button')
            completeButton.textContent = "DONE"
            div.appendChild(completeButton)

            completeButton.addEventListener('click', function (e) {
                //putData(data)

                e.preventDefault()

                h1.textContent = data[i].title

                h1.style.textDecoration = "line-through"

                const update = {
                    title: todoForm.title.value

                }

                putData(data)

                function putData(data) {
                    for (var i = 0; i < data.length; i++) {
                        axios.put("https://api.vschool.io/kelaBernesser/todo/" + data[i]._id, update)
                            .then(response => console.log(response.data))
                            .catch(err => console.log(err))
                    }
                }



            })

        createDeleteButton()
        


        function createDeleteButton() {
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "I don't wanna do it"
            div.appendChild(deleteButton)

            deleteButton.addEventListener('click', function (e) {
                deleteData(data)

                e.preventDefault()

                document.getElementById('to-do-list').removeChild(div)
                div.removeChild(h1)
                div.removeChild(deleteButton)
                div.removeChild(h3)
                div.removeChild(price)
                div.removeChild(imgUrl)
                div.removeChild(completeButton)



            })


        }

        /*function createCompleteButton() {
            
            
        }*/

    }
    console.log(data)

}



getData()

function clearList() {
    const el = document.getElementById("to-do-list")
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }

}

//getData()

const todoForm = document["to-do-form"]

todoForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const newItem = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price : todoForm.price.value,
        imgUrl : todoForm.imgUrl.value
        

    }

    

    axios.post("https://api.vschool.io/kelaBernesser/todo", newItem)
        .then(res => getData(res.data))
        .catch(error => console.log(error))
})


