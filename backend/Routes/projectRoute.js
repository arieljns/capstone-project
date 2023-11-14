const express = require("express")
const { httpGetProjectsData, httpPostProjectData, httpDeleteData, httpUpdateProjectData } = require("../controllers/projectController")
const projectRoute = express.Router()

projectRoute.get("/", httpGetProjectsData)
projectRoute.post("/", httpPostProjectData)
projectRoute.delete("/:_id", httpDeleteData)
// projectRoute.patch("/:id", httpUpdateProjectData)


module.exports = projectRoute