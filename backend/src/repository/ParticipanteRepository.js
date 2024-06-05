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

    getById(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM participante WHERE id=?",[id] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    post(nombre, apellido1, apellido2, fecha, fotografia) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO participante (nombre, apellido_1, apellido_2, fecha, fotografia) VALUES (?,?,?,?,?)", [nombre, apellido1, apellido2, fecha, fotografia] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows.insertId);
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM participante WHERE id=?",[id] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows.affectedRows);
            });
        });
    }
};

module.exports = new ParticipanteRepository();