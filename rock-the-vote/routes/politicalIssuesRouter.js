const express = require("express")
const politicalIssuesRouter = express.Router()
const PoliticalIssues = require('../models/politicalIssues.js')
const Voter = require('../models/voter.js')

politicalIssuesRouter.get('/', (req, res, next) => {
    PoliticalIssues.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

politicalIssuesRouter.get('/issues/:politicalIssueId', (req, res, next) => {
    PoliticalIssues.findOne({ _id: req.params.politicalIssueId }, (err, politicalIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(politicalIssue)
    })
})

politicalIssuesRouter.get('/upvotes', (req, res, next) => {
    PoliticalIssues.find({ upvotes: req.params.upvotes }, (err, upvotesData) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(upvotesData)
    })
    console.log(req.query)
})



politicalIssuesRouter.get('/voter', (req, res, next) => {
    PoliticalIssues.find({ user: req.user._id }, (err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

politicalIssuesRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new PoliticalIssues(req.body)
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

politicalIssuesRouter.put('/:politicalIssueId', (req, res, next) => {
    PoliticalIssues.findOneAndUpdate(
        { _id: req.params.politicalIssueId },
        req.body,
        { new: true },
        (err, politicalIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(politicalIssue)
        })
})

politicalIssuesRouter.put('/downvote/:politicalIssueId', async (req, res, next) => {
    try {
        const issue = await PoliticalIssues.findOne({ _id: req.params.politicalIssueId });
        if (issue.userArray.includes(req.user._id)) {
            res.status(403);
            throw new Error("You can only vote once per issue!");
        }
        const updated = await PoliticalIssues.findOneAndUpdate(
            { _id: req.params.politicalIssueId },
            {
                $inc: { downvotes: +1 },
                $push: { userArray: req.user._id }
            },
            { new: true }
        );
        return res.status(200).send(updated);
    } catch (err) {
        res.status(500);
        return next(err);
    }
})

politicalIssuesRouter.put('/upvote/:politicalIssueId', async (req, res, next) => {
    try {
        const issue = await PoliticalIssues.findOne({ _id: req.params.politicalIssueId });
        if (issue.userArray.includes(req.user._id)) {
            res.status(403);
            throw new Error("You can only vote once per issue!");
        }
        const updated = await PoliticalIssues.findOneAndUpdate(
            { _id: req.params.politicalIssueId },
            {
                $inc: { upvotes: +1 },
                $push: { userArray: req.user._id }
            },
            { new: true }
        );
        return res.status(200).send(updated);
    } catch (err) {
        res.status(500);
        return next(err);
    }
})










module.exports = politicalIssuesRouter