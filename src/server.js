require('dotenv').config();
//import express from "express";
const express = require('express');
const bodyParser = require('body-parser');
const configViewEngine = require('./configs/viewEngine');
const initWebRoutes = require('./routes/web');
const cookieParser = require('cookie-parser');
const connectFlash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

let app = express();

//Enable body-parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//use cookie parser
app.use(cookieParser('secret'));


//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

 
//Enable flash message
app.use(connectFlash());


//Config View Engine 
configViewEngine(app);

//config passport middleware
app.use(passport.initialize());
app.use(passport.session());

//init all web route
initWebRoutes(app);

let port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Kacmart Eccomerce store is running on port ${port}!`));