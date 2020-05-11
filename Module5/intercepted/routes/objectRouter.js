const express = require("express")
const objectRouter = express.Router()

const people = [
    {name: "Kela"},
    {name: "JD"},
    {name: "Ally"},
    {name: "Bailey"}

]

objectRouter.use("/", (req, res, next) => {
    req.body = people
    next()
})

module.exports = objectRouter