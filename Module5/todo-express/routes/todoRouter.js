const express = require("express")
const todoRouter = express.Router()
const uuid = require("uuid/v4")

const todos = [
    {name: "room",
    description: "clean room, sweep, make bed, hang things up",
    imageUrl: "https://r-cf.bstatic.com/images/hotel/max1024x768/213/213503505.jpg",
    completed: false,
    _id: uuid()},

    {name: "laundry",
    description: "separate white laundry from colored laundry",
    imageUrl: "https://www.thespruce.com/thmb/UTIz-IxLgdXe87kzAedAOk78UKw=/2578x2578/smart/filters:no_upscale()/exhausted-man-with-laundry-basket-sitting-by-washing-machine-609626966-5abdb1d7ae9ab8003729789d.jpg",
    completed: false,
    _id: uuid()},

    {name: "homework",
    description: "work for at least eight hours",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Homework_-_vector_maths.jpg/1200px-Homework_-_vector_maths.jpg",
    completed: false,
    _id: uuid()},

    {name: "grocery shopping",
    description: "make a list, go to trader joes",
    imageUrl: "https://cdn.vox-cdn.com/thumbor/3yJfMnbXyfjPigHHPOorFPj_jL4=/0x0:6532x4800/1200x675/filters:focal(2791x2304:3835x3348)/cdn.vox-cdn.com/uploads/chorus_image/image/66576803/GettyImages_1215433825_toned.0.jpg",
    completed: false,
    _id: uuid()},
]

//get all todos
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

//get one todo
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(`Successfully added ${newTodo} to database`)
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    todos.splice(foundTodo, 1)
    res.send("Successfully deleted movie")
})

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updatedObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updatedObject)
    res.send(updatedTodo)
})






module.exports = todoRouter