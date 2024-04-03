const express = require('express');
var cors = require('cors');
const app = express();

const getDataRoute = require('./Route/getData');

app.use(cors({credentials: true, origin: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'}));

app.use('/starter', getDataRoute);

module.exports = app;
