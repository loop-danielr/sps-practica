const repository = require('../repository/ParticipanteHabilidadRepository.js');

class ParticipanteHabilidadService {

    constructor() { };

    getByParticipanteId(req, res) {
        const { participanteId } = req.body;
        return repository.getById(participanteId)
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };

    post(req, res) {
        const { participanteId, habilidadId } = req.body;
        return repository.post(participanteId, habilidadId)
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };

    delete(req, res) {
        const { participanteId } = req.body;
        return repository.delete(participanteId)
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };
}

module.exports = new ParticipanteHabilidadService();