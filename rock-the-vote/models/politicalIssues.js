const mongoose = require('mongoose')
const Schema = mongoose.Schema

const politicalIssuesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "Voter",
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    userArray: {
        type: Array
    }

})
module.exports = mongoose.model("PoliticalIssues", politicalIssuesSchema)