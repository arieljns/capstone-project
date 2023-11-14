const Projects = require("../models/projectModels")


async function httpGetProjectsData(req, res) {
    try {
        const response = await Projects.find({})
        return res.status(200).json(response)

    } catch (error) {
        console.log(error)
    }

}

async function httpPostProjectData(req, res) {
    const { title, description } = req.body

    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }

    try {
        const response = await Projects.create({
            title,
            description
        })
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }



}

async function httpDeleteData(req, res) {
    const { _id } = req.params

    try {
        const deleteData = await Projects.deleteOne({
            _id
        })
        if (deleteData.deletedCount === 0) {
            return res.status(404).json({
                message: `No workout with id ${_id} found`
            });
        }

        return res.status(200).json({
            message: `Workout with id ${_id} is deleted`
        });
    } catch (error) {
        console.log(error)
    }
}

//     const { _id } = req.params

//     if (!_id) {
//         return res.status(400).json({
//             message: "client Error"
//         })
//     }

//     const updateData = await Projects.updateOne({
//         _id
//     })
// }

module.exports = { httpGetProjectsData, httpPostProjectData, httpDeleteData}