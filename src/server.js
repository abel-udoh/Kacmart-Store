require('dotenv').config();
//import express from "express";
const express = require('express');
const bodyParser = require('body-parser');
const configViewEngine = require('./configs/viewEngine');
const initWebRoutes = require('./routes/web');
const cookieParser = require('cookie-parser');
const connectFlash = require('connect-flash');
const session = require('express-session')

let app = express();

//Enable body-parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//config session
app.use(session( options: {
    secret: 'secret',
    resave: true;
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 *24 //86400000 1 day
    }
}));


//Enable flash message
app.use(connectFlash());


//Config View Engine
configViewEngine(app);

//init all web route
initWebRoutes(app);

let port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Kacmart Eccomerce store is running on port ${PORT}!`));