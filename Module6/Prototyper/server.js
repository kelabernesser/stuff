const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const path = require("path")
app.use(express.static(path.join(__dirname, "client", "build")))

const port = process.env.PORT || 7000;


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/prototype-authentication',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ['HS256'] || "natural daydreams jasmin hand"}))
app.use('/api/protests', require('./routes/protestRouter'))
app.use('/api/comments', require('./routes/commentRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnathorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on local port ${port}`)
})