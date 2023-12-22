const express= require('express');
/**
 * Config view engine for app
 */
let configViewEngine = (app)=> {
    app.use(express.static("./src/public"));
    app.set("view engine", "html");
    app.set("views","./src/views");
};

module.exports = configViewEngine;