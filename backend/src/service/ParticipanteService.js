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

    getById(req, res){
        const { id }  = req.body;
        return repository.getById(id)
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };

    post(req, res){
        const { nombre, apellido1, apellido2, fecha, fotografia }  = req.body;
        return repository.post(nombre, apellido1, apellido2, fecha, fotografia)
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };

    delete(req, res){
        const { id }  = req.body;
        return repository.delete(id)
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };
}

module.exports = new ParticipanteService();