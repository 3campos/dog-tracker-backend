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

//create a POST route to add games to the game library
const create = (req, res) => {
    db.Task.create(
        req.body, (error, createdTask) => {
            if(error) return res.status(400).json({error: error.message});
            return res.status(200).json(createdTask)
        }
    )
}