const db = require('../dbConn.js');

class HabilidadRepository {

    constructor () {};
    // Obtiene todas las habilidades registradas
    get() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM habilidad", (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    // Obtiene la habilidad por su id
    getById(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM habilidad WHERE id=?",[id] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    // Guarda una nueva habilidad
    post(nombre) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO habilidad (nombre) VALUES (?)",[nombre] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows.insertId);
            });
        });
    }

    // Edita el nombre de la habilidad segun el id
    put(id, nombre) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE habilidad SET nombre=? WHERE id=?",[nombre, id] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows.changedRows);
            });
        });
    }

    // Elimina la habilidad segun el id
    delete(id) {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM habilidad WHERE id=?",[id] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows.affectedRows);
            });
        });
    }
};

module.exports = new HabilidadRepository();