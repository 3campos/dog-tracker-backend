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