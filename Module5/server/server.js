//first Express Server
const express = require("express")

//server variable, function, parts to be a server
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//MiddleWAre
app.use(express.json())// looks for a request body, and turns it into "req.body"
app.use(morgan('dev'))//logs requests to the console

//connect to DB                                //name of database
mongoose.connect('mongodb://localhost:27017/moviesdb', 
{   //configuration object
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB")
)

app.use("/movies", require("./routes/movieRouter.js"))

app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    //next will literally trigger the next thing in line (The get function following)
    next()
})


app.use("/items", (req, res, next) => {
    req.body = {name: "Rick"}
    next()
})



app.get("/items", (req, res, next) => {
    console.log("GET REQUEST RECIEVED")
    res.send(req.body)
})



app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


//app knows to be listening
//1.port 2. CB
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
}) 