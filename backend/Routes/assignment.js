const express = require("express")

const { httpGetAssignData } = require("../controllers/assignController")

const assignRoute = express.Router()


assignRoute.get("/", httpGetAssignData)

module.exports = assignRoute