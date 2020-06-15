const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

//Get All 
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, inventories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})

//get by genre
inventoryRouter.get('/search/category', (req, res, next) => {
    Inventory.find({category: req.query.category}, (err, inventories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})

//Post one
inventoryRouter.post('/', (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

//delete one
inventoryRouter.delete('/:inventoryId', (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.name}`)
    })
})

//update one
inventoryRouter.put('/:inventoryId', (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true},
        (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})

module.exports = inventoryRouter