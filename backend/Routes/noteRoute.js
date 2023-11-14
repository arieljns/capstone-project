const express = require("express")
const { createNoteData, getNoteData } = require("../controllers/noteController")
const noteRoute = express.Router()

noteRoute.post("/", createNoteData)
noteRoute.get("/", getNoteData)

module.exports = noteRoute