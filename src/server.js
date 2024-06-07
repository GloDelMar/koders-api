const cors= require("cors")
const express = require("express")

const kodersRouter = require("./routes/koders.router")
const generationsRouter = require("./routes/generations.router")
const authRouter = require("./routes/auth.router")


const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use("/koders", kodersRouter)
app.use("/generations", generationsRouter)
app.use("/auth", authRouter)

app.get("/", (request, response)=>{
    response.json({
        message: "Koders APIv1"
    })
})

module.exports = app