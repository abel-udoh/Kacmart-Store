/*
//import mysql from "mysql2";
const mysql = require('mysql2');
require('dotenv').config();

let connection = mysql.createConnection( opts, {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

connection.connect(cb, function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = connection;
*/

const mysql = require('mysql2');
require('dotenv').config();

const opts = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
};

// Create a connection using the options
let connection = mysql.createConnection(opts);

// Connect to the database
connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Database Connected!");
});

module.exports = connection;
