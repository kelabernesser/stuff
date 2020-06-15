const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstName: {
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    living: {
        type: Boolean,
        require: true
    },
    bountyAmount: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema)