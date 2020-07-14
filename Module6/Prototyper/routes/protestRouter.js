const express = require('express')
const protestRouter = express.Router()
const Protests = require('../models/protests.js')


//get all
protestRouter.get('/', (req, res, next) => {
    Protests.find((err, protests) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(protests)
    })
})


//get by Id
protestRouter.get('/:protestId', (req, res, next) => {
    Protests.findOne({_id: req.params.protestId}, (err, protest) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(protest)
    })
})


// Get protests by user id
protestRouter.get("/user", (req, res, next) => {
    Protests.find({ user: req.user._id }, (err, protests) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(protests)
    })
  })

//post one
protestRouter.post('/', (req, res, next) =>{
    req.body.user = req.user._id
    const newProtest = new Protests(req.body)
    newProtest.save((err, savedProtest) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedProtest)
    })
})

//delete one
protestRouter.delete("/:protestId", (req, res, next) => {
    Protests.findOneAndDelete(
      { _id: req.params.protestId, user: req.user._id },
      (err, deletedProtest) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully delete Protest: ${deletedProtest}`)
      }
    )
  })

//attending count
protestRouter.put('/attending/:protestId', async(req, res, next) => {
    try{
        const protest = await Protests.findOne({_id: req.params.protestId})
        if(protest.userArray.includes(req.user._id)){
            res.status(403)
            throw new Error("You're already attending!")
        }

        const updated = await Protests.findOneAndUpdate(
            {_id: req.params.protestId},
            {
                $inc: { attending: +1},
                $push: { userArray: req.user._id},
                $pull: { notUserArray: req.user._id},

            },
            { new : true}
        )
        return res.status(200).send(updated)
    } catch(err){
        res.status(500)
        return next(err)
    }
})

protestRouter.put('/notAttending/:protestId', async(req, res, next) => {
    try{
        const protest = await Protests.findOne({_id: req.params.protestId})
        if(protest.notUserArray.includes(req.user._id)){
            res.status(403)
            throw new Error("You're already attending!")
        }

        const updated = await Protests.findOneAndUpdate(
            {_id: req.params.protestId},
            {
                $inc: { attending: -1},
                $push: { notUserArray: req.user._id},
                $pull: { userArray: req.user._id}
            },
            { new : true}
        )
        return res.status(200).send(updated)
    } catch(err){
        res.status(500)
        return next(err)
    }
})

module.exports = protestRouter