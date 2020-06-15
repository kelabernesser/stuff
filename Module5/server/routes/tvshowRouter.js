const express = require("express")
const tvshowRouter = express.Router()
const uuid = require("uuid/v4")

const tvShows = [
    {title: "Rick and Morty", _id: uuid()},
    {title: "Watchmen", _id: uuid()},
    {title: "Westworld", _id: uuid()},
    {title: "Friends", _id: uuid()}
]

tvshowRouter.get("/", (req, res) => {
    res.send(tvShows)
})

tvshowRouter.post("/", (req, res) => {
    
    const newShow = req.body
    newShow._id = uuid()
    tvShows.push(newShow)
    res.send(`Successfully added ${newShow.title} to the database`)

})

module.exports = tvshowRouter