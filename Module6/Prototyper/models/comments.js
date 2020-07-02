const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    textBody:{
        type: String,
        required: true
    },

    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    protest: {
        type: Schema.Types.ObjectId,
        ref: "Protests",
        required: true
    }
})

module.exports = mongoose.model("Comments", commentSchema)