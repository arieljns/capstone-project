const Notes = require("../models/noteModel")


async function createNoteData(req, res) {
    const { notes } = req.body

    try {
        const response = await Notes.create({ notes })
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }

}

async function getNoteData(req, res) {
    try {
        const response = await Notes.find({})
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createNoteData, getNoteData }