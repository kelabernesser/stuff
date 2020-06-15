const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/Bounty.js')


//Get all movies
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
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
bountyRouter.get("/search/type", (req, res) => {
    Bounty.find({type: req.query.type}, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//post one
bountyRouter.post("/", (req,res) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedBounty)
    })
})

//delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.name}`)
    })
})

//update one
bountyRouter.put("/:bountyId", (req,res) => {
   Bounty.findOneAndUpdate(
       {_id: req.params.bountyId},
       req.body,
       {new: true},
       (err, updatedBounty) => {
           if(err){
               res.status(500)
               return next(err)
           }
           return res.status(201).send(updatedBounty)
       }
   )
})

module.exports = bountyRouter