const mysql = require("mysql2")

var db = mysql.createConnection({
    host: '127.0.0.1',
    database: 'resume',
    user: 'tree',
    password: 'password'
})

module.exports = db;

// ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
// SELECT User FROM mysql.user;
// use resume;
// show tables;
//describe sql_injection;
//CREATE USER 'tree'@'localhost' IDENTIFIED BY 'password';
//GRANT ALL PRIVILEGES ON *.* TO 'tree'@'localhost' WITH GRANT OPTION;
