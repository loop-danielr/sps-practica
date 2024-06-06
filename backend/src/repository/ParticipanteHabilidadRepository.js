const db = require('../dbConn.js');

class ParticipanteHabilidadRepository {

    constructor () {};

    getByParticipanteId(participanteId) {
        return new Promise((resolve, reject) => {
            db.query("SELECT ph.id as id, h.nombre as nombre FROM participante_habilidad ph INNER JOIN habilidad h ON ph.habilidad_id = h.id WHERE ph.participante_id=?",[participanteId] , (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }
};

module.exports = new ParticipanteHabilidadRepository();