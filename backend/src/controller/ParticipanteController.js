const express = require('express');
const router = express.Router();

const ParticipanteService = require('../service/ParticipanteService.js'); 

router.get('/', ParticipanteService.get);
router.get('/byId', ParticipanteService.getById);
router.post('/', ParticipanteService.post);
router.delete('/', ParticipanteService.delete);

module.exports = router;