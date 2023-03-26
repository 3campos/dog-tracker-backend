const db = require('../models')

//index route showing all tasks' data in the database as json
const index = (req, res) => {
    db.Task.find(
        {}, (error, allTasks) => {
            if(error) return res.status(400).json({error: error.message});
            
            return res.status(200).json({
                allTasks,
                requestedAt: newDate().toLocaleString()
            })
        }
    )
}

//create a POST route to add tasks to the task library
const create = (req, res) => {
    db.Task.create(
        req.body, (error, createdTask) => {
            if(error) return res.status(400).json({error: error.message});
            return res.status(200).json(createdTask)
        }
    )
}

//put route
const update = (req, res) => {
    db.Task.findByIdAndUpdate(req.params.id,
        {
            $set: req.body
        },
        {new: true},
        (err, updatedTask) => {
            if(err) return res.status(400).json({error: err.message})
            return res.status(200).json(updatedTask)
        }
    )
}

//delete route
const destroy = (req, res) => {
    db.Task.findByIdAndDelete(req.params.id, (error, deletedTask) => {
        if(!deletedTask) return res.status(400).json({error: "Task not found"})
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({
            message: `Task ${deletedTask.title} deleted`
        })
    })
}

module.exports = {
    index,
    create,
    update,
    destroy
}