const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comments.js')

commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

commentRouter.get('/protest/:protestId', (req, res, next) => {
    Comment.find({protest: req.params.protestId}, (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

commentRouter.post('/:protestId', (req, res, next) => {
    req.body.protest = req.params.protestId
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