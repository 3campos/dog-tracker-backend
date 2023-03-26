//set up server variables/external modules
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cors = require ('cors');

//internal modules
const routes = require('./routes')

//environment variables
require('dotenv').config();
const PORT = process.env.PORT || 3003;

//set up cors middleware
                                                 //👇deployed site link goes here
const whitelist = [`${process.env.FRONTEND_URL}`, ``];
const corsOptions = {
    origin: (origin, callback) => {
        console.log(whitelist, "WHITELIST")
        console.log(origin, "ORIGIN")
        if((whitelist.indexOf(origin) !== -1) || (!origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    //the below line is required for accepting credentials from the front-end, i.e., for accepting authentication.
    //credentials: true,
};

//middleware
//cors for cross-domain approval
app.use(cors(corsOptions));
app.use(express.json())
//body data middleware
app.use(express.urlencoded({extended: true}))
//method override Middleware
app.use(methodOverride("_method"))
//serve public files

//Routes
//this adds /tasks to the start of all routes on local and deployed versions of the app
app.use('/tasks', routes.tasks)
//^sending the default route over to the controller

