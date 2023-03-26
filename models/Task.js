const mongoose = require('mongoose');

//create schema
const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    label: {type: String},
    duration: {type: String},
    quantity: {type: String},
    location: {type: String},
    potty: {type: String},
    notes: {type: String},
})

//create model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task