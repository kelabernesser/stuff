const express = require("express")
const commentRouter = express.Router()
const Comment = require('../models/comment.js')

commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})


commentRouter.get('/politicalIssue/:politicalIssueID', (req, res, next) => {
    Comment.find({politicalIssue: req.params.politicalIssueID}, (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

commentRouter.post("/:politicalIssueID", (req, res, next) => {
    req.body.politicalIssue = req.params.politicalIssueID
    req.body.user = req.user._id
    const newComment = new Comment(req.body)

    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})


module.exports = commentRouter
