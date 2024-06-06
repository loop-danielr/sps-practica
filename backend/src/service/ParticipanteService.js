const repository = require('../repository/ParticipanteRepository.js');

class ParticipanteService{
    
    constructor () {};

    get(req, res){
        return repository.get()
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };

    post(req, res){
        const { nombre, apellido1, apellido2, fecha }  = req.body;
        return repository.post(nombre, apellido1, apellido2, fecha )
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };
}

module.exports = new ParticipanteService();