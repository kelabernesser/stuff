const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid/v4")

const bounties = [
    {firstName: "Yoda", lastName: "", living: false, bountyAmount: 29, type:"Jedi", _id : uuid()},
    {firstName: "Luke", lastName: "Skywalker", living: true, bountyAmount: 41, type:"Jedi", _id : uuid()},
    {firstName: "Darth", lastName: "Vader", living: false, bountyAmount: 7, type:"Sith", _id : uuid()},
    {firstName: "Darth", lastName: "Sidious", living: true, bountyAmount: 105, type:"Sith", _id : uuid()}
]

//Get all movies
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

//Get one
bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        const error = new Error(`ID: ${bountyId} was not found`)
        return next(error)
    }
    res.send(foundBounty)
})

//get by genre
bountyRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredBounties = bounties.filter(bounty => bounty.genre === genre)
    res.send(filteredBounties)
})

//post one
bountyRouter.post("/", (req,res) => {
    const newBounty = req.body
    newBounty._id == uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

//delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted index")
})

//update one
bountyRouter.put("/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
    res.send(updatedBounty)
})

module.exports = bountyRouter