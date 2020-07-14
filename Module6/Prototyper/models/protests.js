const mongoose = require('mongoose')
const Schema = mongoose.Schema

const protestSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    when:{
        type:String,
        required: true
    },

    where:{
        type:String,
        required: true
    },
    lat:{
        type:Number,
        required: true
    },
    lng:{
        type:Number,
        required: true
    },

    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        reqired: true
    },

    attending: {
        type: Number,
        default: 0
    },
    notUserArray: {
        type: Array,
    },
    
    userArray: {
        type: Array
    }
})

module.exports = mongoose.model("Protests", protestSchema)