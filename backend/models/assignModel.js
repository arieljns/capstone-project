const mongoose= require("mongoose")

const Schema= mongoose.Schema

const assignModel= new Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
})

module.exports= mongoose.model("Assign", assignModel)