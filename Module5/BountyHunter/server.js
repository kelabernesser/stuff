const express = require('express')
const morgan = require(`morgan`)
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use("/bounties", require("./routes/bountyRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})

})

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})