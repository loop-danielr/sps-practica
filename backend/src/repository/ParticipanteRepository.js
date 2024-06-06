const db = require('../dbConn.js');

class ParticipanteRepository {

    constructor () {};
    
    get() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM participante", (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    post(nombre, apellido1, apellido2, fecha) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO participante (nombre, apellido_1, apellido_2, fecha) VALUES (?,?,?,?)", [nombre, apellido1, apellido2, fecha] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows.insertId);
            });
        });
    }
};

module.exports = new ParticipanteRepository();