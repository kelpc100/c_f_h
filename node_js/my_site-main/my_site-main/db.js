const mysql = require("mysql2")

var db = mysql.createConnection({
    host: '127.0.0.1',
    database: 'db',
    user: 'user',
    password: 'password'
})

module.exports = db;

// ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
// SELECT User FROM mysql.user;
// use db;
// show tables;
//describe sql_injection;
//CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
//GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' WITH GRANT OPTION;
