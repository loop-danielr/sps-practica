const repository = require('../repository/HabilidadRepository.js');

class HabilidadService{
    
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
        const { nombre }  = req.body;
        return repository.post(nombre)
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json(err.message);
            });
    };

    put(req, res){
        const { id, nombre }  = req.body;
        return repository.put(id, nombre)
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

module.exports = new HabilidadService();