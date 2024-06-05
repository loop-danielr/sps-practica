const express = require('express');
const router = express.Router();

const ParticipanteHabilidadService = require('../service/ParticipanteHabilidadService.js'); 

router.get('/byParticipanteId', ParticipanteHabilidadService.getByParticipanteId);
router.post('/', ParticipanteHabilidadService.post);
router.delete('/', ParticipanteHabilidadService.delete);

module.exports = router;