const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/voter-authentication',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/api/politicalIssues', require('./routes/politicalIssuesRouter.js'))
app.use('/api/comment', require('./routes/commentRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(6000, () => {
    console.log('Server is running on local port 6000')
})