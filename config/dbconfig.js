'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    user: 'prasanna',
    password: '8513',
    database: 'DRDO'
});
dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;