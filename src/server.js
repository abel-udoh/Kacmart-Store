require('dotenv').config();
//import express from "express";
const express = require('express');
const bodyParser = require('body-parser');
const configViewEngine = require('./configs/viewEngine');
const initWebRoutes = require('./routes/web');

let app = express();

//Enable body-parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


//Config View Engine
configViewEngine(app);

//init all web route
initWebRoutes(app);

let port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Kacmart Eccomerce store is running on port ${PORT}!`));