// Set up code to connect Node to MySQL
// require('dotenv').config();
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "vegetable",
        database: "burger_db"
    });
};

connection.connect();

module.exports = connection;

// Code commented out below was included before setting up the JAWSDB_URL add-on.  Leaving code in file for reference.

// let connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "vegetable",
//     database: "burger_db"
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error("Error Connecting: " + err.stack);
//         return;
//     }
//     console.log("Connected as ID " + connection.threadId);
// });