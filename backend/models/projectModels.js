const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})


module.exports = mongoose.model("Projects", ProjectSchema)