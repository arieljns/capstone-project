const Assign = require("../models/assignModel")


async function httpGetAssignData(req, res) {
    try {
        const response = await Assign.find({})
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            main: "Internal Server Error ",
            message: error,
        })
    }


}


module.exports = {httpGetAssignData}