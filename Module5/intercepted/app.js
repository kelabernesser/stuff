const express = require("express")
const app = express()
app.use(express.json())




app.use("/items", require("./routes/objectRouter.js"))


 app.use("/items", (req, res, next) => {
     console.log("Complete")
     next()
 })

 app.get("/items", (req, res, next) => {
     console.log("GET REQUEST RECIEVED")
     res.send(req.body)
 })












 
 app.listen(9000, () => {
     console.log("The server is running")
 })