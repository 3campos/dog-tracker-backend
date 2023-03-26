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