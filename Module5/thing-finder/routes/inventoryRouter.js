const express = require("express")
const inventoryRouter = express.Router()
const uuid = require("uuid/v4")

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()

    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid()
        
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
        
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
        
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()

    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()

    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()

    }
]
  inventoryRouter.get("/", (req, res) => {
      res.send(inventoryItems)
  })

// inventoryRouter.get("/search/price", (req, res) => {
//   const maxPrice = 1000000
//   const minPrice = 0
//   const inventoryPrice = req.params.price
//   const filteredInventory = inventoryItems.filter(item => {

//   })
// })

//seach by id
inventoryRouter.get("/:inventoryId", (req, res) => {
    const inventoryId = req.params.inventoryId
    const foundInventory = inventoryItems.find(inventory => inventory._id === inventoryId)
    res.send(foundInventory)
    
})

//search by name
inventoryRouter.get("/search/name", (req, res) => {
    const name = req.query.name
    const filteredName = inventoryItems.filter(item => item.name === name)
    res.send(filteredName)
})

//search by type
inventoryRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredType = inventoryItems.filter(item => item.type === type)
    res.send(filteredType)
})

module.exports = inventoryRouter