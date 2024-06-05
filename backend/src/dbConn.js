const mysql = require('mysql2');

// Configuracion de la base de datos obtenida desde las variables de entorno
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_DABA;

// Crea la conexion hacia la base de datos
const db = mysql.createConnection({
    host,
    port,
    user,
    password,
    database
});

// Ejecuta la conexion de la base de datos
db.connect(
    (err) => {
        if (err) throw err;
        console.log('-- DB CONNECTION SUCCESSFUL --');
    }
);

module.exports = db;