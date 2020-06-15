const express = require('express')
const voterRouter = express.Router()
const Voter = require('../models/voter.js')
const jwt = require('jsonwebtoken')

//signup
voterRouter.post('/signup', (req, res, next) => {
    Voter.findOne({ username: req.body.username.toLowerCase() }, (err, voter) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (voter) {
            res.status(403)
            return next(new Error("*Voter is already registered"))
        }
        const newVoter = new Voter(req.body)
        newVoter.save((err, savedVoter) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedVoter.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ token, voter: savedVoter.withoutPassword() })
        })
    })
})

//login
voterRouter.post('/login', (req, res, next) => {
    Voter.findOne({ username: req.body.username.toLowerCase() }, (err, voter) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!voter) {
            res.status(403)
            return next(new Error("*Username or password is incorrect"))
        }
        voter.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(403)
                return next(new Error("*Username or password are incorrect"))
            }
            if (!isMatch) {
                res.status(403)
                return next(new Error("*Username or password is incorrect"))
            }
            const token = jwt.sign(voter.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ token, voter: voter.withoutPassword() })
        })

    })
})






module.exports = voterRouter