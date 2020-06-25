const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const voterSchema = new Schema({
    username: {
        type: String, 
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
    
})

voterSchema.pre("save", function(next){
    const voter = this
    if(!voter.isModified("password")) return next()
    bcrypt.hash(voter.password, 10, (err, hash) => {
        if(err) return next(err)
        voter.password = hash
        next()
    })
})

voterSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) callback(err)
        return callback(null, isMatch)
    })
}

voterSchema.methods.withoutPassword = function(){
    const voter = this.toObject()
    delete voter.password
    return voter
}


module.exports = mongoose.model("Voter", voterSchema)