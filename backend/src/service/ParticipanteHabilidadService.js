const repository = require('../repository/ParticipanteHabilidadRepository.js');

class ParticipanteHabilidadService {

    constructor() { };

    getByParticipanteId(req, res) {
        const { participanteId } = req.body;
        return repository.getByParticipanteId(participanteId)
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };
}

module.exports = new ParticipanteHabilidadService();