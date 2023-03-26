//configure dotenv module in seeds.js
const dotenv = require("dotenv");
dotenv.config();

//import mongoose and task model
const mongoose = require('mongoose');
const Task = require('./Task.js');

//connect to mongoose and set up console log test
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log('MONGO CONNECTION OPEN!!!')})
.catch((err)=>{
    console.log(err)
})

//set up seedTasks array
const seedTasks = [
    {
        title: "Morning Walk",
        label: "🦮",
        duration: "30",
        quantity: "2",
        location: "Burnham Park",
        potty: "1",
        notes: "Sniffed around and met another pup"
    }
]