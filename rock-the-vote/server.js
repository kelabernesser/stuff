const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
require('dotenv').config()
//
const path = require("path")
const port = process.env.PORT || 6000;

app.use(express.json())
app.use(morgan('dev'))

//sending static file requests to the client
app.use(express.static(path.join(__dirname, "client", "build")))


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/voter-authentication',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({secret: process.env.SECRET || "hi maybe time yes"}))
app.use('/auth/voter', require('./routes/authRouter.js'))
app.use('/api/politicalIssues', require('./routes/politicalIssuesRouter.js'))
app.use('/api/comment', require('./routes/commentRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//catchall route handler
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log('Server is running on local port 6000')
})