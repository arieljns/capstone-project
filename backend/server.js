const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const app = express()
const projectRoute = require("./Routes/projectRoute")
const bodyParser = require("body-parser")
const noteRoute= require("./Routes/noteRoute")
const assignRoute= require("./Routes/assignment")
app.use(express.json(bodyParser))
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.status(200).json({
        message: "this is a home page"
    })
})

app.use("/projects", projectRoute)
app.use("/notes", noteRoute)
app.use("/assignment", assignRoute)



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening on PORT : 8000")
        })
    })
    .catch((error) => {
        console.log(error)
    })

process.env