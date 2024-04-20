const express = require('express');
var cors = require('cors');
const app = express();

const getPriceRoute = require('./Route/getPrice');
const getSMARoute = require('./Route/getSMA');

app.use(cors({credentials: true, origin: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'}));

app.use('/org', getPriceRoute);
app.use('/org', getSMARoute);

module.exports = app;
