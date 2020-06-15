const express = require('express')
const typeRouter = express.Router()
const Type = require('../models/type.js')

//get all types
typeRouter.get('/', (req,res, next) => {
    Type.find((err, types) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(types)
    })
})

//get types by user
typeRouter.get('/user', (req, res, next) => {
    Type.find({user: req.user._id}, (err, types) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(types)
    })
})

//add a new type
typeRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newType = new Type(req.body)

    newType.save((err, savedType) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedType)
    })
})

//deleteType
typeRouter.delete('/:typeId', (req, res, next) => {
    Type.findOneAndDelete(
        {_id: req.params.typeId, user: req.user._id},
        (err, deletedType) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted type: ${deletedType.title}`)
        }
    )
}) 

typeRouter.put('/:typeId', (req, res, next) =>{
    Type.findOneAndUpdate(
        {_id: req.params.typeId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedType) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedType)
        }
    )
})

module.exports = typeRouter