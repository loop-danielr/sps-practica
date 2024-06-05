const db = require('../dbConn.js');

class ParticipanteHabilidadRepository {

    constructor () {};

    getByParticipanteId(participanteId) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM participante_habilidad WHERE participante_id=?",[participanteId] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    post(participanteId, habilidadId) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO participante_habilidad (participante_id, habilidad_id) VALUES (?, ?)",[participanteId, habilidadId] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows.insertId);
            });
        });
    }

    delete(participanteId) {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM participante_habilidad WHERE participante_id=?",[participanteId] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows.affectedRows);
            });
        });
    }
};

module.exports = new ParticipanteHabilidadRepository();