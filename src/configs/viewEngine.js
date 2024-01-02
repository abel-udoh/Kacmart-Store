const express= require('express');
/**
 * Config view engine for app
 */
let configViewEngine = (app)=> {
    app.use(express.static("./"));
    app.set("view engine", "ejs", "html");
    app.set("views","/");
};

module.exports = configViewEngine;