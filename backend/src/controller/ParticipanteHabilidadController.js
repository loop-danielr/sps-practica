const express = require('express');
const router = express.Router();

const ParticipanteHabilidadService = require('../service/ParticipanteHabilidadService.js'); 

router.post('/byParticipanteId', ParticipanteHabilidadService.getByParticipanteId);

module.exports = router;