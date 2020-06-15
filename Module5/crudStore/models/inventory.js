const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)