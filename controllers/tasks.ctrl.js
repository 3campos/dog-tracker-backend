const db = require('../models')

//index route showing all tasks' data in the database as json
const index = async(req, res) => {
    try {
        const allTasks = await db.Task.find({});
        return res.status(200).json({
            allTasks,
            requestedAt: new Date().toLocaleString()
        })
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

//create a POST route to add tasks to the task library

const create = async(req, res) => {
    try{
        const createdTask = await db.Task.create(req.body);
        return res.status(200).json(createdTask);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

//put route
const update = async (req, res) => {
    try {
        const updatedTask = await db.Task.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        return res.status(200).json(updatedTask);
    } catch (err){
        return res.status(400).json({error: err.message});
    }
}

//delete route

const destroy = async (req, res) => {
    try{
        const deletedTask = await db.Task.findByIdAndDelete(req.params.id);
        if(!deletedTask) return res.status(400).json({error: "Task not found"})
        return res.status(200).json({
            message: `Task ${deletedTask.title} deleted`
        })
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports = {
    index,
    create,
    update,
    destroy
}