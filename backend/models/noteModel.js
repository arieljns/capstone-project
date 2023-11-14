const mongoose = require("mongoose")

const Schema = mongoose.Schema

const noteSchema = new Schema({
    notes: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Notes", noteSchema)