const mysql = require('mysql2');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_DABA;

const db = mysql.createConnection({
    host,
    port,
    user,
    password,
    database
});

db.connect(
    (err) => {
        if (err) throw err;
        console.log('-- DB CONNECTION SUCCESSFUL --');
    }
);

module.exports = db;