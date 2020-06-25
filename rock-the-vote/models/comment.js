const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    textBody:{
        type: String
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "Voter",
        required: true
    },

    politicalIssue: {
        type: Schema.Types.ObjectId,
        ref: "PoliticalIssues",
        required: true
    }
})

module.exports = mongoose.model("Comments", commentSchema)