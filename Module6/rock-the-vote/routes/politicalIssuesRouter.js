const express = require("express")
const politicalIssuesRouter = express.Router()
const PoliticalIssues = require('../models/politicalIssues.js')
const Voter = require('../models/voter.js')

politicalIssuesRouter.get('/', (req, res, next) => {
    PoliticalIssues.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

politicalIssuesRouter.get('/issues/:politicalIssueId', (req, res, next) => {
    PoliticalIssues.findOne({_id: req.params.politicalIssueId}, (err, politicalIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(politicalIssue)
    })
})

politicalIssuesRouter.get('/voter', (req, res, next) => {
    PoliticalIssues.find({user: req.user._id}, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

politicalIssuesRouter.post("/",(req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new PoliticalIssues(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

politicalIssuesRouter.put('/:politicalIssueId', (req, res, next) => {
    PoliticalIssues.findOneAndUpdate(
        {_id: req.params.politicalIssueId}, 
        req.body,
        {new: true},
        (err, politicalIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(politicalIssue)
    })
})

politicalIssuesRouter.put('/upvote/:politicalIssueId', (req, res, next) => {
    PoliticalIssues.findOneAndUpdate(
        {_id: req.params.politicalIssueId},
        {$inc: {upvotes: 1}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
    
    )
})

politicalIssuesRouter.put('/downvote/:politicalIssueId', (req, res, next) => {
    PoliticalIssues.findOneAndUpdate(
        {_id: req.params.politicalIssueId},
        {$inc: {downvotes: 1}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

politicalIssuesRouter.put('/decrementUpvote/:politicalIssueId', (req, res, next) => {
    PoliticalIssues.findOneAndUpdate(
        {_id: req.params.politicalIssueId},
        {$inc: {upvotes: -1}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
    
    )
})

politicalIssuesRouter.put('/decrementDownvote/:politicalIssueId', (req, res, next) => {
    PoliticalIssues.findOneAndUpdate(
        {_id: req.params.politicalIssueId},
        {$inc: {downvotes: -1}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
    
    )
})






module.exports = politicalIssuesRouter